<?php

include('connect.php');
header("content-type: text/html; charset=utf8");

$con->query("set names utf8");

//$q="select * from position";

$q="select * from notice order by noticeId desc";//倒叙显示数据库的通知表

$res=$con->query($q);

$data=$res->fetch_all();

echo json_encode($data, JSON_UNESCAPED_UNICODE);