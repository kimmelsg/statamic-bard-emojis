<?php

namespace Kimmelsg\BardEmojis;

use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/emojis.js',
    ];

    public function boot() {
        parent::boot();
    }
}
