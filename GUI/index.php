<?php
$link = mysql_connect('localhost:3306', 'root', 'Gorizont22');
if (!$link) {
    die('Ошибка соединения: ' . mysql_error());
}
echo 'Успешно соединились';
mysql_close($link);
?>