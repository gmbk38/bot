<?php
$mysqli = new mysqli("localhost","gui","gui123","test");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
} else {
    echo "OK";
}

$sql = "SELECT * FROM `final_test`;";
$result = $mysqli -> query($sql);


$row = $result -> fetch_array(MYSQLI_ASSOC);
printf ("%s (%s)\n", $row["id"], $row["tag"]);

// Free result set
$result -> free_result();

$mysqli -> close();
?>

<!-- #! /bin/sh
rm -R bot
git clone https://github.com/gmbk38/bot
systemctl restart apache2 -->
