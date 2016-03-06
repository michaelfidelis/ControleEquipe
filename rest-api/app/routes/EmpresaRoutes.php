<?php

require "app/controllers/EmpresaController.php";

use App\Controller\EmpresaController;

$empresaController = new EmpresaController();

$app->get('/empresas', function() use($empresaController){
    $empresaController->getEmpresas();
});

?>