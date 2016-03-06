<?php

require "app/controllers/ProjetoController.php";

use App\Controller\ProjetoController;

$projetoController = new ProjetoController();

$app->get('/projetos', function() use($projetoController){
    $projetoController->getProjetos();
});

?>