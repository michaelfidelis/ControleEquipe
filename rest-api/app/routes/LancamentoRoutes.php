<?php

require "app/controllers/LancamentoController.php";

use App\Controller\LancamentoController;

$lancamentoController = new LancamentoController();

$app->get('/lancamentos', function() use($lancamentoController){
    $lancamentoController->getLancamentos();
});

?>