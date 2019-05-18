<?php
include 'config.php';


$sel4 = mysqli_query($con,"select * from categoria;");
$data = array();

while ($row = mysqli_fetch_array($sel4)) {
 $data[] = array("idCategoria"=>$row['idCategoria'],"titulo"=>$row['titulo']);
} 
echo json_encode($data);