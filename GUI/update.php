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

echo($exa);
// $sql = "UPDATE `final_test` SET id = '$id', tag = '$tag', q = '$q', a = '$a' WHERE id = '$exid' AND tag = '$extag' AND q = '$exq';";

// $sql = "SELECT * FROM `final_test` WHERE id = '$exid' AND tag = '$extag' AND q = '$exq';";
// $result = $mysqli -> query($sql);

// // $row = $result -> fetch_all(MYSQLI_ASSOC);
// // echo($row[0]["id"]);
// $result -> free_result();

// $mysqli -> close();
?>
