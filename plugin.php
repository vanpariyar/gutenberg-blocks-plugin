<?php
/**
 * Plugin Name: Guten Blog Demo
 * Author: Ronak vanpariya (vanpariyar@gmail.com)
 * Plugin URI: https://github.com/vanpariyar/gutenberg-blocks-plugin
 * Author URI: https://vanpariyar.github.io
 * Version: 1.0.0
 */
function loadMyBlockFiles() {
    wp_enqueue_script(
      'my-super-unique-handle',
      plugin_dir_url(__FILE__) . '/first-demo/my-block.js',
      array('wp-blocks', 'wp-i18n', 'wp-editor'),
      true
    );
  }
  add_action('enqueue_block_editor_assets', 'loadMyBlockFiles');

?>