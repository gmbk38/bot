<?php
$mysqli = new mysqli("localhost","gui","gui123","test");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$sql = "SELECT * FROM `final_test`;";
$result = $mysqli -> query($sql);

$row = $result -> fetch_all(MYSQLI_ASSOC);

for ($i = 0; $i < count($row); $i++) {
  $e = $row[$i];
  echo "<input class='data_load'>";
  printf ("%s %s %s %s", $e["id"], $e["tag"], $e["q"], $e["a"]);
  echo "</input>";
}

$result -> free_result();

$mysqli -> close();

require_once('redirect.html');
?>
