<?php
$servername = "localhost:3306"; // Имя хоста БД
$username = "u1366_kasper"; // Пользователь БД
$password = "KASPER38!"; // Пароль к базе
$dbname = "u1366079_csg"; // Имя базы

$conn = new mysqli($servername, $username, $password, $dbname);

// include 'reg_check.php';

$login = $_POST["login"];
$pwd = $_POST["pwd"];

if(isset($_POST["new_acc"])){
	if(isset($_POST["agreement"])) {
		
		// Проверяем наличие логина в БД
		require_once('reg_check.php');
		$exist = check($login);
		
		if ($exist) {
			
			echo '<script language="javascript">';
			echo 'alert("Пользователь с таким логином уже зарегистрирован")';
			echo '</script>';
			require_once('index.html');
			
		} else {
			// Вносим в БД accounts
			$sql = "INSERT INTO accounts (login, pwd) values ('$login','$pwd');";
			// $new_table = "CREATE TABLE `$login` (lc varchar(20) NULL, case_drop varchar(40), balance int, PRIMARY KEY (balance));";
			
			// Создаём в БД персональную таблицу пользователя
			$new_table = "CREATE TABLE `$login` ( `id` INT NOT NULL AUTO_INCREMENT , `lc` INT(20) NOT NULL , `case_drop` INT(20) NOT NULL , 			`balance` INT(20) NOT NULL , PRIMARY KEY (`id`));";
			$conn->query($new_table);

			// Вносим первоначальные данные
			$upd_table = "INSERT INTO `$login` (lc, balance) values (0,0);";
			$conn->query($upd_table);
			if ($conn->query($sql) === TRUE) {
				
				// Alert в случае успешной регистрации
				echo '<script language="javascript">';
				echo 'alert("Регистрация прошла успешно")';
				echo '</script>';
				require_once('index.html');
				
			}
		}
		$conn->close();
	} else {
		// Если не стоит согласие с ПС
		echo '<script language="javascript">';
		echo 'alert("Вы не согласились с пользовательским соглашением")';
		echo '</script>';
		require_once('index.html');
	}
} else if (isset($_POST["sell_item"])) {
	
	$login = $_POST["login_php"];
	$lc = $_POST["lc_php"];
	$curr_balance = $_POST["balance_php"];
	$case_drop = $_POST["drop_php"];
	
	$data = "SELECT * FROM $login ORDER BY id DESC";
	$data_res = $conn->query($data);
	$point2 = $data_res->fetch_array(MYSQLI_ASSOC);
	$lc = $point2["lc"];
	
	$upd_table = "INSERT INTO `$login` (lc, case_drop, balance) values ('$lc','$case_drop','$curr_balance');";
	$conn->query($upd_table);
	
	$name = $login;
	$balance = $curr_balance;
	
	require_once('index.html');
	
	$conn->close();
} else if (isset($_POST["get_item"])) {
	
	$login = $_POST["login_php"];
	$lc = $_POST["lc_php"];
	$curr_balance = $_POST["balance_php"];
	$case_drop = $_POST["drop_php"];
	
	$data = "SELECT * FROM $login ORDER BY id DESC";
	$data_res = $conn->query($data);
	$point2 = $data_res->fetch_array(MYSQLI_ASSOC);
	$lc = $point2["lc"];
	
	$upd_table = "INSERT INTO `$login` (lc, case_drop, balance) values ('$lc','$case_drop','$curr_balance');";
	$conn->query($upd_table);
	
	$name = $login;
	$balance = $curr_balance;
	
	require_once('index.html');
	
	$conn->close();
} else if (isset($_POST["lc_form"])) {
	
	$lc = $_POST["lc_php"];
	$login = $_POST["login_php"];
	$curr_balance = $_POST["balance_php"];
	$upd = "INSERT INTO `$login` (lc, balance) values ('$lc','$curr_balance');";
	$conn->query($upd);
	
	$name = $login;
	$balance = $curr_balance;
	
	require_once('index.html');
	
	$conn->close();
	
} else {
	$sql = "SELECT * FROM accounts WHERE login = '$login' AND pwd = '$pwd'";
	$name = "SELECT * FROM accounts WHERE login = '$login' AND pwd = '$pwd'";
	$data = "SELECT * FROM $login ORDER BY id DESC";
	
	$name_res = $conn->query($name);
	$data_res = $conn->query($data);
	
	$point = $name_res->fetch_array(MYSQLI_ASSOC);
	$point2 = $data_res->fetch_array(MYSQLI_ASSOC);
	
	$name = $point["login"];
	
	$balance = $point2["balance"];

	$lc = $point2["lc"];
	
	$result = $conn->query($sql);
	$row = $result->fetch_array(MYSQLI_ASSOC);

	if ($row["pwd"] == $pwd && $row["login"] == $login) {
		require_once('index.html');
	}
	else {
	 /* echo "Ошибка авторизации, проверьте данные для входа!"; */
		$login = '';
		$pwd = '';
		$balance = '';
		$lc = '';
		echo '<script language="javascript">';
		echo 'alert("Неправильные данные для входа")';
		echo '</script>';
		require_once('index.html');
	}

$conn->close();
}

?>