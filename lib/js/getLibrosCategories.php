<?php
include 'config.php';


$sel3 = mysqli_query($con,"select * from libro_has_categoria;");
$data = array();

while ($row = mysqli_fetch_array($sel3)) {
 $data[] = array("Libro_idLibro"=>$row['Libro_idLibro'],"Categoria_idCategoria"=>$row['Categoria_idCategoria']);
} 
echo json_encode($data);