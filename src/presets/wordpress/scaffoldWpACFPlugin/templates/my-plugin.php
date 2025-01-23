<?php

/**
 * Plugin Name: My Custom Post Types and Fields
 * Description: A plugin to register custom post types and fields using ACF.
 * Version: 1.0.0
 * Author: Your Name
 */

defined('ABSPATH') || exit;

// Autoload dependencies via Composer
require_once __DIR__ . '/vendor/autoload.php';

// Initialize the plugin
MyPlugin\Plugin::init();