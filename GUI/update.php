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

alert("data upd")
$sql = "UPDATE `final_test` SET id = $id, tag = $tag, q = $q, a = $a WHERE id = $exid, tag = $extag, q = $exq, a = $exa;";
$result = $mysqli -> query($sql);
alert("success data upd")

$row = $result -> fetch_all(MYSQLI_ASSOC);

$result -> free_result();

$mysqli -> close();
?>
