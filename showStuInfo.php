<?php

include('connect.php');
header("content-type: text/html; charset=utf8");

$con->query("set names utf8");

//$q="select * from position";

$q="select * from student where username='006';";

$res=$con->query($q);

$data=$res->fetch_all();

echo json_encode($data, JSON_UNESCAPED_UNICODE);