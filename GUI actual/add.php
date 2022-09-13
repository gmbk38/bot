<?php
$id = $_POST["id"]; 
$tag = $_POST["tag"];
$q = $_POST["q"];
$a = $_POST["a"];

$mysqli = new mysqli("localhost","gui","gui123","test");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$sql = "INSERT INTO `final_test` (id, tag, q, a) values ('$id','$tag','$q','$a');";

$result = $mysqli -> query($sql);

$row = $result -> fetch_all(MYSQLI_ASSOC);
$result -> free_result();

$mysqli -> close();
?>
