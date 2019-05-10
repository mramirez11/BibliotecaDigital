<?php
$host="localhost";
$user="root";
$pass="";
$db="biblioteca";
$con = mysqli_connect($host, $user, $pass,$db);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
