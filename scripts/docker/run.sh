#!/bin/bash
#
# Copyright (c) 2017, United States Government, as represented by the
# Administrator of the National Aeronautics and Space Administration.
# 
# All rights reserved.
# 
# The Astrobee platform is licensed under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with the
# License. You may obtain a copy of the License at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

# short help
usage_string="$0 usage:  [-h] [-x <use ubuntu 16.04 image>]\
 [-b <use ubuntu 18.04 image>] [-f <use ubuntu 20.04 image>]\
 [-r <download remote image>]"
#[-t make_target]
docs_url="https://nasa.github.io/astrobee/html/install-docker.html"

usage()
{
    echo "$usage_string"
    echo "see: $docs_url"
}
platform=`uname -s`
case ${platform} in
    Linux*)     os=`cat /etc/os-release | grep -oP "(?<=VERSION_CODENAME=).*"`
                ;; 
    *)          os="focal" # In macOS / Windows, default to focal, unless override is provided below.
                ;;
esac
args="dds:=false robot:=sim_pub"
tagrepo=astrobee

while [ "$1" != "" ]; do
    case $1 in
        -x | --xenial )                 os="xenial"
                                        ;;
        -b | --bionic )                 os="bionic"
                                        ;;
        -f | --focal )                  os="focal"
                                        ;;
        -r | --remote )                 tagrepo=ghcr.io/nasa
                                        ;;
        --args )                        args+=" $2"
                                        shift
                                        ;;
        -h | --help )                   usage
                                        exit
                                        ;;
        * )                             usage
                                        exit 1
    esac
    shift
done

if [ "$os" = "xenial" ]; then
tag=astrobee:latest-ubuntu16.04
elif [ "$os" = "bionic" ]; then
tag=astrobee:latest-ubuntu18.04
elif [ "$os" = "focal" ]; then
tag=astrobee:latest-ubuntu20.04
fi

# check if local docker tag exists
if [ "$tagrepo" = "astrobee" ] && [[ "$(docker images -q $tagrepo/$tag 2> /dev/null)" == "" ]]; then
  echo "Tag $tagrepo/$tag not found locally, either build astrobee locally or use the --remote flag."
  usage
  exit 1
fi

# readlink is not UNIX standard, default to perl.
readlinkf(){ perl -MCwd -e 'print Cwd::abs_path shift' "$1";}
rootdir=$(dirname "$(readlinkf "$0")")
cd $rootdir

# setup XServer for Docker
XSOCK=/tmp/.X11-unix
case ${platform} in
    Darwin*)    XAUTH=~/.Xauthority ;;
          *)    XAUTH=/tmp/.docker.xauth ;;
esac
if [ "$platform" = "Darwin" ]; then
    ip=`ifconfig en0 | grep inet | awk '$1=="inet" {print $2}'`
    open -a XQuartz
    sleep 1
    DISPLAY=$ip:0
fi

if [ "$platform" = "Darwin" ]; then
    xhost +$IP
    xhost +local:docker
else
    touch $XAUTH
    xauth nlist $DISPLAY | sed -e 's/^..../ffff/' | xauth -f $XAUTH nmerge -
fi

docker run -it --rm --name astrobee \
        --volume=$XSOCK:$XSOCK:rw \
        --volume=$XAUTH:$XAUTH:rw \
        --env="XAUTHORITY=${XAUTH}" \
        --env="DISPLAY=${DISPLAY}" \ #--gpus all \
      $tagrepo/$tag \
    /astrobee_init.sh roslaunch astrobee sim.launch $args
