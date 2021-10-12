<?php
include('connect.php');
header("content-type: text/html; charset=utf8");

$username=$_POST['username'];//post获取表单中的username
$password=$_POST['password'];
$stuPhone=$_POST['stuPhone'];
$stuMail=$_POST['stuMail'];

$q="insert into student(username,password,stuPhone,stuMail) values ('$username','$password','$stuPhone','$stuMail');";//向数据库插入表单传来的值的sql
$result=$con->query($q);//执行sql

if(!$result){
    echo "注册失败";
    echo $result;
}else{
    echo "注册成功";
}

$con->close();//关闭数据库