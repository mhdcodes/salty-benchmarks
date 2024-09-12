<?php

$root = __DIR__ . "/../../";

require $root . "vendor/autoload.php";

use Dumbo\Dumbo;

$app = new Dumbo();

$app->get("/", function ($context) {
  return $context->text("Hello world!");
});

$app->run();