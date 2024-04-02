<?php
/**
 * Plugin Name: Call to Action Block
 * Plugin URI: https://geniuscourses.com
 * Description: Gutenberg Block
 * Author: Alex Sochirca
 * Author URI: https://geniuscourses.com
 */

 function genius_ctablock_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','genius_ctablock_init');