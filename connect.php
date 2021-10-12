<?php
$server = "localhost:3308";//主机
$db_username = "root";//数据库用户名
$db_password = "";//数据库密码
$db_name = "employment_system";//数据库名

$con = new mysqli($server, $db_username, $db_password,$db_name);//连接数据库
// 检测连接
if (!$con) {
    die("Connection failed: " . mysqli_connect_error()); //连接失败，返回报错
}else{
//  连接成功
}
?>