<?php

require "app/controllers/PapelAtuacaoController.php";

use App\Controller\PapelAtuacaoController;

$papelAtuacaoController = new PapelAtuacaoController();

$app->get('/papeisAtuacao', function() use($papelAtuacaoController){
    $papelAtuacaoController->getPapeisAtuacao();
});

?>