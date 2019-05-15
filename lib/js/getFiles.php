<?php
$dire = "C:\wamp\www\BibliotecaDigital\lib\img\libros";
$data = array();
$a=$_GET["ruta"]


$dir=$dire.$a;

if(is_dir($dir)){
    if($dh = opendir($dir)){
        while(($file = readdir($dh)) != false){
            if($file == "." or $file == ".."){
            } else {
                $data[] = $file;
            }
        }
    }
   
}
echo json_encode($data);
?>