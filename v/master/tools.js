var tools =
[
    [ "Bag Processing", "bag_processing.html", [
      [ "Package Overview", "bag_processing.html#autotoc_md616", null ],
      [ "Usage Instructions", "bag_processing.html#autotoc_md617", null ],
      [ "Scripts", "bag_processing.html#autotoc_md618", [
        [ "apply_histogram_equalization_to_images", "bag_processing.html#autotoc_md619", null ],
        [ "check_bag_for_gaps", "bag_processing.html#autotoc_md620", null ],
        [ "clock_skew", "bag_processing.html#autotoc_md621", null ],
        [ "csv_join", "bag_processing.html#autotoc_md622", null ],
        [ "get_msg_stats", "bag_processing.html#autotoc_md623", null ],
        [ "rosbag_debayer", "bag_processing.html#autotoc_md624", null ],
        [ "rosbag_detect_bad_topics", "bag_processing.html#autotoc_md625", null ],
        [ "rosbag_fix_all", "bag_processing.html#autotoc_md626", null ],
        [ "rosbag_merge", "bag_processing.html#autotoc_md627", null ],
        [ "rosbag_rewrite_types", "bag_processing.html#autotoc_md628", null ],
        [ "rosbag_sample", "bag_processing.html#autotoc_md629", null ],
        [ "rosbag_splice", "bag_processing.html#autotoc_md630", null ],
        [ "rosbag_topic_filter", "bag_processing.html#autotoc_md631", null ],
        [ "rosbag_trim", "bag_processing.html#autotoc_md632", null ],
        [ "rosbag_verify", "bag_processing.html#autotoc_md633", null ]
      ] ],
      [ "Utilities", "bag_processing.html#autotoc_md634", [
        [ "utilities/bmr_renumber_enum", "bag_processing.html#autotoc_md635", null ]
      ] ],
      [ "Resources", "bag_processing.html#autotoc_md636", null ]
    ] ],
    [ "Calibration", "calibration.html", [
      [ "Package Overview", "calibration.html#autotoc_md637", null ],
      [ "Camera Target Based Intrinsics Calibration", "calibration.html#autotoc_md638", [
        [ "Example Usage", "calibration.html#autotoc_md639", [
          [ "Generate target detections from bagfiles", "calibration.html#autotoc_md640", null ],
          [ "View target detection coverage in image space", "calibration.html#autotoc_md641", null ],
          [ "Calibrate", "calibration.html#autotoc_md642", [
            [ "System requirements and installation", "picoflexx_python.html#autotoc_md224", null ],
            [ "Usage", "picoflexx_python.html#autotoc_md225", null ],
            [ "Getting valid xyz coefficients", "picoflexx_python.html#autotoc_md226", null ],
            [ "Calibration Parameters", "calibration.html#autotoc_md643", null ],
            [ "Run Calibration", "calibration.html#autotoc_md644", null ],
            [ "Calibration Output", "calibration.html#autotoc_md645", null ],
            [ "Judging Calibration Results", "calibration.html#autotoc_md646", null ]
          ] ]
        ] ]
      ] ],
      [ "Usage Instructions", "calibration.html#autotoc_md650", null ],
      [ "Tools", "calibration.html#autotoc_md651", [
        [ "create_undistorted_images", "calibration.html#autotoc_md652", null ],
        [ "run_camera_target_based_intrinsics_calibrator", "calibration.html#autotoc_md653", null ]
      ] ],
      [ "Scripts", "calibration.html#autotoc_md654", [
        [ "calibrate_intrinsics_and_save_results.py", "calibration.html#autotoc_md655", null ],
        [ "copy_calibration_params_to_config.py", "calibration.html#autotoc_md656", null ],
        [ "get_bags_with_topic.py", "calibration.html#autotoc_md657", null ],
        [ "make_error_histograms.py", "calibration.html#autotoc_md658", null ],
        [ "save_images_with_target_detections.py", "calibration.html#autotoc_md659", null ],
        [ "view_all_detections.py", "calibration.html#autotoc_md660", null ]
      ] ]
    ] ],
    [ "GNC Visualizer", "gncvisualizer.html", "gncvisualizer" ],
    [ "Localization Analysis", "localizationanalysis.html", [
      [ "Package Overview", "localizationanalysis.html#autotoc_md678", [
        [ "ROS Mode", "gncvisualizer.html#autotoc_md661", null ],
        [ "DDS Mode", "gncvisualizer.html#autotoc_md662", [
          [ "On-orbit activities", "gncvisualizer.html#autotoc_md663", null ]
        ] ],
        [ "Dependencies", "gncvisualizer.html#autotoc_md664", [
          [ "If used along with the Astrobee Robot Software", "gncvisualizer.html#autotoc_md665", null ],
          [ "If using as a standalone tool", "gncvisualizer.html#autotoc_md666", null ]
        ] ],
        [ "Installing dependencies", "gncvisualizer.html#autotoc_md667", [
          [ "Installing Python", "gncvisualizer.html#autotoc_md668", null ],
          [ "Installing PIP", "gncvisualizer.html#autotoc_md669", null ],
          [ "Installing the RTI connector (DDS Only)", "gncvisualizer.html#autotoc_md670", null ],
          [ "Installing QT in standalone mode", "gncvisualizer.html#autotoc_md671", null ]
        ] ],
        [ "Platform support", "gncvisualizer.html#autotoc_md672", null ],
        [ "Usage Instructions", "localizationanalysis.html#autotoc_md679", null ]
      ] ],
      [ "Tools", "localizationanalysis.html#autotoc_md680", [
        [ "<tt>convert_depth_msg</tt>", "localizationanalysis.html#autotoc_md681", null ],
        [ "<tt>run_bag_imu_filterer</tt>", "localizationanalysis.html#autotoc_md682", null ],
        [ "<tt>run_depth_odometry_adder</tt>", "localizationanalysis.html#autotoc_md683", null ],
        [ "<tt>run_offline_replay</tt>", "localizationanalysis.html#autotoc_md684", null ],
        [ "<tt>run_imu_bias_tester_adder</tt>", "localizationanalysis.html#autotoc_md685", null ],
        [ "<tt>run_sparse_mapping_pose_adder</tt>", "localizationanalysis.html#autotoc_md686", null ]
      ] ],
      [ "Scripts", "localizationanalysis.html#autotoc_md687", [
        [ "<tt>bag_and_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md688", null ],
        [ "<tt>bag_sweep</tt>", "localizationanalysis.html#autotoc_md689", null ],
        [ "<tt>depth_odometry_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md690", null ],
        [ "<tt>get_average_opt_and_update_times</tt>", "localizationanalysis.html#autotoc_md691", null ],
        [ "<tt>groundtruth_sweep</tt>", "localizationanalysis.html#autotoc_md692", null ],
        [ "<tt>imu_analyzer</tt>", "localizationanalysis.html#autotoc_md693", null ],
        [ "<tt>make_groundtruth</tt>", "localizationanalysis.html#autotoc_md694", null ],
        [ "<tt>make_map</tt>", "localizationanalysis.html#autotoc_md695", null ],
        [ "<tt>parameter_sweep</tt>", "localizationanalysis.html#autotoc_md696", null ],
        [ "<tt>plot_all_results</tt>", "localizationanalysis.html#autotoc_md697", null ],
        [ "<tt>plot_results</tt>", "localizationanalysis.html#autotoc_md698", null ],
        [ "<tt>run_offline_replay_and_plot_results</tt>", "localizationanalysis.html#autotoc_md699", null ]
      ] ]
    ] ],
    [ "Localization Rviz Plugins", "localizationrvizplugins.html", [
      [ "Package Overview", "localizationrvizplugins.html#autotoc_md700", [
        [ "Usage", "localizationrvizplugins.html#autotoc_md701", null ],
        [ "Plugins", "localizationrvizplugins.html#autotoc_md702", null ],
        [ "Depth Odometry Display", "localizationrvizplugins.html#autotoc_md703", null ],
        [ "Imu Augmentor Display", "localizationrvizplugins.html#autotoc_md704", null ],
        [ "Localization Graph Display", "localizationrvizplugins.html#autotoc_md705", null ],
        [ "Localization Graph Panel", "localizationrvizplugins.html#autotoc_md706", null ],
        [ "Pose Display", "localizationrvizplugins.html#autotoc_md707", null ],
        [ "Sparse Mapping Display", "localizationrvizplugins.html#autotoc_md708", null ]
      ] ]
    ] ],
    [ "DDS Profile and Types", "dds_profile.html", null ],
    [ "Interactive Marker Teleop", "interactive_marker_teleop.html", null ],
    [ "Performance Tester", "performance_tester.html", null ]
];