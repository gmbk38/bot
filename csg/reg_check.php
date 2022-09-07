<?php
function check($login) {
	$servername = "localhost:3306"; // Имя хоста БД
	$username = "u1366_kasper"; // Пользователь БД
	$password = "KASPER38!"; // Пароль к базе
	$dbname = "u1366079_csg"; // Имя базы
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	$check_table = "SELECT * FROM accounts WHERE login = '$login';";
	$data = $conn->query($check_table);
	$point = $data->fetch_array(MYSQLI_ASSOC);
	$conn->close();
	
	return $point["login"];
}
?>