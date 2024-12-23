<?php

namespace MyPlugin;

use MyPlugin\CustomPostTypes\Register as CPTRegister;
use MyPlugin\CustomFields\Register as FieldsRegister;

class Plugin {
  public static function init() {
    add_action('plugins_loaded', [self::class, 'setup']);
  }

  public static function setup() {
    // Load ACF
    if (class_exists('ACF')) {
      self::includeACF();
    } else {
      add_action('admin_notices', [self::class, 'acfMissingNotice']);
      return;
    }

    // Register Custom Post Types
    CPTRegister::register();

    // Register Custom Fields
    FieldsRegister::register();
  }

  private static function includeACF() {
    \ACF::initialize();
  }

  public static function acfMissingNotice() {
    echo '<div class="error"><p><strong>ACF Pro</strong> is not installed. Please check your plugin dependencies.</p></div>';
  }
}