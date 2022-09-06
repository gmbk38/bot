<?php
$mysqli = new mysqli("localhost","gui","gui123","test");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
} else {
    echo "OK";
}

$sql = "SELECT * FROM final_test";
$result = $mysqli -> query($sql);
echo($result);
// Fetch all
$result -> fetch_all(MYSQLI_ASSOC);
echo($result);
// Free result set
$result -> free_result();
echo($result);
$mysqli -> close();
echo($result);
?>