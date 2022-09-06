<?php
$mysqli = new mysqli("localhost","gui","gui123","test");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
} else {
    echo "OK";

    $sql = "SELECT * FROM final_test";
    $result = $mysqli -> query($sql);
    echo($result);
    echo "OK";
}
?>