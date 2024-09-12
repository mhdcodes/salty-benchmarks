<?php

$root = __DIR__ . "/../../";

require $root . "vendor/autoload.php";

use Dumbo\Dumbo;

$app = new Dumbo();

$db = new PDO('sqlite:'. $root .'database.sqlite');

$app->get("/", function ($context) use($db) {
  $stmt = $db->prepare('SELECT * FROM posts');
  $stmt->execute();
  $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
  return $context->json($posts);
});

$app->run();