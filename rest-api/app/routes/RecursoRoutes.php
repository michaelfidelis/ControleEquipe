<?php

require "app/controllers/RecursoController.php";

use App\Controller\RecursoController;

$recursoController = new RecursoController();

$app->get('/recursos', function() use($recursoController){
    $recursoController->getRecursos();
});

?>