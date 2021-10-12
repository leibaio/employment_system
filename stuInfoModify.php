<?php

include('connect.php');
header("content-type: text/html; charset=utf8");


$stuName=$_POST['stuName'];
$stuSex=$_POST['stuSex'];
$stuAge=$_POST['stuAge'];
$stuNum=$_POST['stuNum'];
$stuClass=$_POST['stuClass'];
$stuPhone=$_POST['stuPhone'];
$stuMail=$_POST['stuMail'];

$q="update student set stuName = '$stuName', stuSex = '$stuSex', stuAge = '$stuAge', stuNum = '$stuNum', stuClass = '$stuClass', stuPhone = '$stuPhone', stuMail = '$stuMail' where username = '006';";


$con->query('SET NAMES UTF8');

$result=$con->query($q);//执行sql

if(!$result){
    echo "修改失败";
}else{
    echo "修改成功";
}