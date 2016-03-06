<?php

require "app/controllers/CelulaController.php";

use App\Controller\CelulaController;

$celulaController = new CelulaController();

$app->get('/celulas', function() use($celulaController){
    $celulaController->getCelulas();
});

?>