<?php

$test = $_POST['test'];
if ($test == '') {
    echo("NO DATA");
} else {
    echo("OK");
    echo($test);
    echo("OK");
}

$mysqli = new mysqli("localhost","gui","gui123","test");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>
