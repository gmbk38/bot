<?php
$servername = "localhost:3306"; // Имя хоста БД
$username = "bot"; // Пользователь БД
$password = "12345"; // Пароль к базе
$dbname = "test"; // Имя базы

$conn = new mysqli($servername, $username, $password, $dbname);


$q = $conn->real_escape_string($_POST["q"]);
$a = $conn->real_escape_string($_POST["a"]);
$sql = "INSERT INTO final_test (q, a) values ('$q','$a');";

if ($conn->query($sql) === TRUE) {
 echo "Запрос выполнен";	
}
$conn->close();
?>