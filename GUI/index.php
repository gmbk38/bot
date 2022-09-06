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
?>

<!-- #! /bin/sh
rm -R bot
git clone https://github.com/gmbk38/bot
systemctl restart apache2 -->

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Обновление БД</title>
</head>

<!-- ИНСТРУКЦИЯ ДЛЯ ОПЕРАТОРОВ -->

<body>

    <div class="edit">
        <div id="edit_text">
            <div>
                <textarea name="" id="tid" cols="30" rows="10" placeholder="Категория" tabindex="1"></textarea>
                <textarea name="" id="ttag" cols="30" rows="10" placeholder="Тег" tabindex="2"></textarea>
                <textarea name="" id="tq" cols="30" rows="10" placeholder="Вопрос" tabindex="3"></textarea>
                <textarea name="" id="ta" cols="30" rows="10" placeholder="Ответ" tabindex="4"></textarea>
            </div>
            <div>
                <button id="upd_btn">Обновить</button>
                <button id="delete_btn">Удалить</button>
            </div>
            <div id="MyAlert">
                <p>Восстановить ячейку НЕВОЗМОЖНО!</p>
                <p>Для продолжения кликните второй раз</p>
            </div>
        </div>
    </div>

    <div class="top_menu">
        <button id="edit_btn">
            <div id="h_line"></div>
            <div id="v_line"></div>
        </button>
        <button id="hide_btn">
            <div id="left"></div>
            <div id="right"></div>
        </button>
    </div>

    <div class="sort" id="try_to_hide">

        <div class="sort_grid">
            <h2>Сортировка</h2>
            <div>
                <p>Категория</p>
                <input type="text" id="sort_id" onkeyup="SortById()">
            </div>
            <div>
                <p>Тег</p>
                <input type="text" id="sort_tag" onkeyup="SortByTag()">
            </div>
            <div>
                <p>Вопрос</p>
                <input type="text" id="sort_q" onkeyup="SortByQ()">
            </div>
                <div>
                    <p>Ответ</p>
                    <input type="text" id="sort_a" onkeyup="SortByA()">
                </div>
        </div>

        <div class="filters_grid">
            <h2>Фильтры</h2>
            <div class="filters">
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter">
                    <span class="slider round"></span>
                </label>
                <p>Cодержит</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter">
                    <span class="slider round"></span>
                </label>
                <p>Не содержит</p>
                </div>
                <!-- <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Начинается с</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Заканчивается</p>
                </div> -->
            </div>

            <div class="filters">
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter2">
                    <span class="slider round"></span>
                </label>
                <p>Cодержит</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter2">
                    <span class="slider round"></span>
                </label>
                <p>Не содержит</p>
                </div>
                <!-- <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Начинается с</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Заканчивается</p>
                </div> -->
            </div>

            <div class="filters">
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter3"> 
                    <span class="slider round"></span>
                </label>
                <p>Cодержит</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter3">
                    <span class="slider round"></span>
                </label>
                <p>Не содержит</p>
                </div>
                <!-- <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Начинается с</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Заканчивается</p>
                </div> -->
            </div>

            <div class="filters">
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter4">
                    <span class="slider round"></span>
                </label>
                <p>Cодержит</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox" class="filter4">
                    <span class="slider round"></span>
                </label>
                <p>Не содержит</p>
                </div>
                <!-- <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Начинается с</p>
                </div>
                <div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <p>Заканчивается</p>
                </div> -->
            </div>
            
        </div>

        <div class="extra_grid">
            <h2>Дополнительно</h2>
            <div class="extra">
            <div>
                <label class="switch">
                    <input type="checkbox" id="theme">
                    <span class="slider round"></span>
                </label>
                <p>Тёмная тема</p>
            </div>
            </div>
        </div>
    </div>

    <div class="db">
        <table id="myTable">
            <tr>
                <th>Категория</th>
                <th>Тег</th>
                <th>Вопрос</th>
                <th>Ответ</th>
            </tr>
            <tr>
                <td>Бакалавриат</td>
                <td>Сроки</td>
                <td>Когда резеврные дни для экзаменов?</td>
                <td>Резервный день: 22.07</td>
            </tr>
            <tr>
                <td>Магистратура</td>
                <td>БВИ</td>
                <td>Что такое БВИ?</td>
                <td>Поступление на программу в рамках бюджетных мест без вступительных испытаний.
                    внимание: на программах магистратуры нет права бви</td>
            </tr>
            <tr>
                <td>Магистратура</td>
                <td>БВИ</td>
                <td>Можли ли поступить по БВИ?</td>
                <td>По программам магистратуры не предусмотрены 
                    отдельные места на бюджет в рамках поступления 
                    по олимпиаде без вступительных испытаний. 
                    Свою олимпиаду вы можете указать как 
                    индивидуальное достижение 
                    (внести в портфолио при подаче документов)</td>
            </tr>
            <tr>
                <td>Бакалавриат</td>
                <td>Сроки</td>
                <td>Если не успел подать документы на бюджет, когда можно подать на платное?</td>
                <td>В любое время, до окончания сроков приема: заявление - до 16.08, договор - до 20.08</td>
            </tr>
            <tr>
                <td>Бакалавриат</td>
                <td>Сроки</td>
                <td>С какого числа можно заключить договор?</td>
                <td>договор можно заключить с:    
                    - на очную и очно-заочную формы: до 20.08
                    - на заочную форму: до 20.09</td>
            </tr>
            <tr>
                <td>Аспирантура</td>
                <td>Программы</td>
                <td>Где можно узнать учебный план?</td>
                <td>На страничке с описанием каждой программы есть ссылка скачать подробный учебный план</td>
            </tr>
            <tr>
                <td>Аспирантура</td>
                <td>Программы</td>
                <td>В каком Диссертационном Совете защищаются ваши аспиранты?</td>
                <td>Диссертационный совет финансового университета</td>
            </tr>
            <tr>
                <td>Аспирантура</td>
                <td>Программы</td>
                <td>Где можно найти перечень программ аспирантуры?</td>
                <td>Ознакомиться с данной информацией
                    вы можете на сайте финансового университета
                    поступающим-аспирантура-направление и программы подготовки научно-педогогических кадров в аспирантуре</td>
            </tr>
            <tr>
                <td>Аспирантура</td>
                <td>Программы</td>
                <td>Есть ли программа двух дипломов?</td>
                <td>Нет, не продусмотрена</td>
            </tr>
            <tr>
                <td>Аспирантура</td>
                <td>Программы</td>
                <td>Каковы особенности проведения занятий?</td>
                <td>Помимо привычных форм проведения занятий вас ждут мастер-классы, научно-методологические семинары,
                    панельные дискуссии, научные дебаты, круглые столы, научно-практические конференции</td>
            </tr>
        </table>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="main.js"></script>
    <script src="db.js"></script>
</body>
</html>