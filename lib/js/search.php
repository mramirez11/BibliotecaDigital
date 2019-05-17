<?php
include 'config.php';

$val= $_GET['value'];


$sel = mysqli_query($con,"select * from biblioteca.libro");
$arrayFind = array();

while ($row = mysqli_fetch_array($sel)) {
 $arrayFind[] = array("idLibro"=>$row['idLibro'],"titulo"=>$row['titulo'],"rutaPagina"=>$row['rutaPagina'],"cantPaginas"=>$row['cantPaginas']);
} 
echo json_encode($arrayFind);