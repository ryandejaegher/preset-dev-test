<?php

namespace MyPlugin\CustomFields;

class Register {
  public static function register() {
    add_action('acf/init', [self::class, 'registerFields']);
  }

  public static function registerFields() {
    if (function_exists('acf_add_local_field_group')) {
      acf_add_local_field_group([
        'key' => 'group_custom_fields',
        'title' => __('Custom Fields', 'my-plugin'),
        'fields' => [
          [
            'key' => 'field_custom_text',
            'label' => __('Custom Text', 'my-plugin'),
            'name' => 'custom_text',
            'type' => 'text',
          ],
        ],
        'location' => [
          [
            [
              'param' => 'post_type',
              'operator' => '==',
              'value' => 'custom_type',
            ],
          ],
        ],
      ]);
    }
  }
}