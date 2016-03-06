<?php

require "app/controllers/FaseController.php";

use App\Controller\FaseController;

$faseController = new FaseController();

$app->get('/fases', function() use($faseController){
    $faseController->getFases();
});

?>