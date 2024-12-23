<?php

namespace MyPlugin\CustomPostTypes;

class Register {
  public static function register() {
    add_action('init', [self::class, 'registerPostTypes']);
  }

  public static function registerPostTypes() {
    register_post_type('custom_type', [
      'label' => __('Custom Type', 'my-plugin'),
      'public' => true,
      'supports' => ['title', 'editor', 'thumbnail'],
      'rewrite' => ['slug' => 'custom-type'],
      'show_in_rest' => true,
    ]);
  }
}