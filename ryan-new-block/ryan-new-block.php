<?php

/**
 * Plugin Name:       @@blockTitle
 * Plugin URI:        temple.edu
 * Description:       Display the TU Alert banner on Temple University websites.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.5
 * Author:            Temple University, Fox School of Business
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tu-alert
 *
 * @package           tu-block
 */

namespace @@blockNameSpace\AlertBlock;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_init() {
  register_block_type(__DIR__ . '/build');
}
add_action('init', __NAMESPACE__ . '\block_init');

/**
 * Enqueues block assets for both frontend and editor if the block is present on the current page.
 */
function enqueue_block_assets() {
  wp_enqueue_style('tu-global-variables', 'https://www3.fox.temple.edu/dist/figma/build/variables.css', array(), '1.0.0');
}
add_action('enqueue_block_assets', __NAMESPACE__ . '\enqueue_block_assets');