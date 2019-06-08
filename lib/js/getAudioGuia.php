<?php
include 'config.php';


$sel4 = mysqli_query($con,"select * from audio_guia;");
$data = array();

while ($row = mysqli_fetch_array($sel4)) {
 $data[] = array("idAudio_Guia"=>$row['idAudio_Guia'],"titulo"=>$row['titulo'],"ruta"=>$row['ruta']);
} 
echo json_encode($data);