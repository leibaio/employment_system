<?php

include('connect.php');//调用connect.php文件
header("Content-Type: text/html; charset=utf8");

$name=$_POST['username'];//post获取表单的username
$password=$_POST['password'];//post获取表单的password

$q="select * from student where username = $name and password = $password;";//向数据库查询表单传来的值的sql语句

$con->query('SET NAMES UTF8');
$result=$con->query($q);//执行sql

//获取执行 sql 后的返回对象
$obj=$result->fetch_assoc();

if(mysqli_num_rows($result) > 0){
        echo "毕业生登录成功";

}else{
    echo "用户名或密码错误";
}

$con->close();//关闭数据库

?>
