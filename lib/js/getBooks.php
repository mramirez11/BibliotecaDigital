<?php
include 'config.php';


$sel2 = mysqli_query($con,"select * from libro;");
$data = array();

while ($row = mysqli_fetch_array($sel2)) {
 $data[] = array("idLibro"=>$row['idLibro'],"titulo"=>$row['titulo'],"rutaPagina"=>$row['rutaPagina'],"cantPaginas"=>$row['cantPaginas']);
} 
echo json_encode($data);