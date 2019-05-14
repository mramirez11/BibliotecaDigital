<?php
$host="127.0.0.1";
$user="root";
$pass="hola1234";
$db="biblioteca";
$con = mysqli_connect($host, $user, $pass,$db);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
