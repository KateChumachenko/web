<?php
session_start(); // начало сессии: если сессии еще нет 
// (не пришел Cookie "PHPSESSID" или нет файла сессии, 
//  соответствующего значению cookie "PHPSESSID"), то:
//  1) генерируется уникальный идентификатор сессии;
//  2) устанавливается Cookie "PHPSESSID" со значением этого идентификатора
//  3) создается файл сессии с соответствующим идентификатору именем
//  4) инициализируется суперглобальный массив $_SESSION, который проецируется на файл сессии
//--- конфигурационные параметры ---
$db_drivername = "mysql";
$hostname = "localhost";
$dbname = "web";
$username = "root";
$password = "";
//--- Создание PDO для соединения с сервером БД ---
$pdo = new PDO("{$db_drivername}:host={$hostname};dbname={$dbname}", $username, $password);
//--- 1 параметр PDO: "mysql:host=localhost;dbname=weblabdb"
//--- 2 параметр PDO: "root"
//--- 3 параметр PDO: ""
$pdo->query("SET CHARACTER SET utf8"); // установка кодировки символов для текущего соединения с MySQL Server

require_once 'blocks/auth.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Catherine Travel</title>
        <link rel="stylesheet" href="style.css" type="text/css"/>
    </head>
    <body id="main">
        <div id="main-table">
            <?php include 'blocks/header.php'; ?>
            <div id="main-cont">
                <?php
                $url = '\'' . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) . '\'';
                $menu_item_result = $pdo->query("SELECT * FROM  `page` WHERE url=" . $url);
                if ($menu_item_result->rowCount() > 0) {
                    $menu_item = $menu_item_result->fetch(PDO::FETCH_ASSOC);
                    echo $menu_item['content'];
                } else {
                    echo 'Неверный URL!!!';
                }
                ?>
            </div>
            <div id="main-adv">
                <?php include 'blocks/adv.php'; ?>
            </div>
            <div id="main-copy">
                <?php include 'blocks/copy.php' ?>
            </div>
        </div>        
        <script src="js/jquery-2.1.4.min.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>