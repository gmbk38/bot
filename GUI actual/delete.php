<?php
$exid = $_POST["exid"]; 
$extag = $_POST["extag"];
$exq = $_POST["exq"];
$exa = $_POST["exa"];

$mysqli = new mysqli("localhost","gui","gui123","test");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$sql = "DELETE FROM `final_test` WHERE id = '$exid' AND tag = '$extag' AND (q = '$exq' OR a = '$exa');";

$result = $mysqli -> query($sql);

$row = $result -> fetch_all(MYSQLI_ASSOC);
$result -> free_result();

$mysqli -> close();
?>
