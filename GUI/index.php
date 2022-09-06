<?php
$dbhost = "localhost:3306";
$dbuser = "root";
$dbpass = "Gorizont22";
$db = "test";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
  
echo($conn);
?>