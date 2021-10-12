<?php

include('connect.php');
header("content-type: text/html; charset=utf8");

$noticeId=$_POST['noticeId'];
$noticeContent=$_POST['noticeContent'];//post获取表单中的noticeContent

$q="insert into notice(noticeId,noticeContent) values('$noticeId','$noticeContent');";//向数据库插入表单传来的值的sql
$con->query('SET NAMES UTF8');
$result=$con->query($q);//执行sql

if(!$result){
    echo "发送失败";
}else{
    echo "发送成功";
}