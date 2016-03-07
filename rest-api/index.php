<?php
 
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

header("Access-Control-Allow-Origin: *");

$app = new \Slim\Slim();

$app->add(new App\Middleware\RequestMiddleware());

//Routes ========================================================
require_once "app/routes/EmpresaRoutes.php";
require_once "app/routes/FaseRoutes.php";
require_once "app/routes/GerenteProjetoRoutes.php";
require_once "app/routes/CelulaRoutes.php";
require_once "app/routes/PapelAtuacaoRoutes.php";
require_once "app/routes/RecursoRoutes.php";
require_once "app/routes/ProjetoRoutes.php";
require_once "app/routes/LancamentoRoutes.php";

//Rodar aplicação ================================================
$app->run();
 
?>
