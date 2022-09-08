<?php
$exid = $_POST["exid"]; 
$id = $_POST["id"];
$extag = $_POST["extag"];
$tag = $_POST["tag"];
$exq = $_POST["exq"];
$q = $_POST["q"];
$exa = $_POST["exa"];
$a = $_POST["a"];

$mysqli = new mysqli("localhost","gui","gui123","test");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$sql = "UPDATE `final_test` SET id = $id, tag = $tag, q = $q, a = $a WHERE id = $exid AND tag = $extag AND q = $exq AND a = $exa;";
$result = $mysqli -> query($sql);

$row = $result -> fetch_all(MYSQLI_ASSOC);

$result -> free_result();

$mysqli -> close();
?>
