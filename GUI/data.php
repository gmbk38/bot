<?php
$mysqli = new mysqli("localhost","gui","gui123","test");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$sql = "SELECT * FROM `final_test`;";
$result = $mysqli -> query($sql);


$row = $result -> fetch_all(MYSQLI_ASSOC);
// printf ("%s (%s)\n", $row["id"], $row["tag"]);
// printf ($row[1]);

for ($i = 0; $i < count($row); $i++) {
    $e = $row[$i];
    printf ("%s 
    &nbsp;&nbsp;&nbsp;&nbsp; 
    %s 
    &nbsp;&nbsp;&nbsp;&nbsp; 
    %s 
    &nbsp;&nbsp;&nbsp;&nbsp; 
    %s ", $e["id"], $e["tag"], $e["q"], $e["a"]);
    echo "<br>";
    echo "<br>";
    echo "<br>";
}

function table_load() {
    return $row;
}

function table_upd() {
    $mysqli = new mysqli("localhost","gui","gui123","test");

    // $sql = "SELECT * FROM `final_test`;";
    $result = $mysqli -> query($sql);

    $mysqli -> close();
    echo "OK";
}

function table_remove() {
    return $row;
}

// Free result set
$result -> free_result();

$mysqli -> close();

if (isset($_POST["test123"])) {
    $login = $_POST["test"];
    alert($login);
}
?>

<!-- #! /bin/sh
rm -R bot
git clone https://github.com/gmbk38/bot
systemctl restart apache2 -->