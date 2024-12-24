<?php

function vdplug_image_textboxes_init()
{
    register_block_type(
        VDPLUG_DIR . '/build/blocks/image-textboxes'
    );
}
add_action('init', 'vdplug_image_textboxes_init');
