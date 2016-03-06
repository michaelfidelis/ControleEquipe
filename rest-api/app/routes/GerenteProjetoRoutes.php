<?php

require "app/controllers/GerenteProjetoController.php";

use App\Controller\GerenteProjetoController;

$gerenteProjetoController = new GerenteProjetoController();

$app->get('/gerentesProjeto', function() use($gerenteProjetoController){
    $gerenteProjetoController->getGerentesProjeto();
});

?>