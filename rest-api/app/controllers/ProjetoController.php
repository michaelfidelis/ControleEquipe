<?php
namespace App\Controller;

require_once "app/providers/PDOProvider.php";

    use App\Provider\PDOProvider;
    use \PDO;

class ProjetoController {

//	private $app;
    
	public function __construct() {
//        $this->app = \Slim\Slim::getInstance();
    }

    function getProjetos() {
        
        $app = \Slim\Slim::getInstance();
        $connection = PDOProvider::getConnection();
        
        try{

            $sth = $connection->prepare("SELECT * FROM projeto");
            $sth->execute();

            $projetos = $sth->fetchAll(PDO::FETCH_OBJ);

            if($projetos) {
                $app->response->setStatus(200);
                $app->response()->headers->set('Content-Type', 'application/json');
                echo json_encode($projetos);
                $connection = null;
            } else {
                $app->response()->setStatus(204);
                throw new PDOException('No records found.');
            }
        } catch(PDOException $e) {
            $app->response()->setStatus(404);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }
}
?>