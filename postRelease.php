<?php

include('connect.php');
header("content-type: text/html; charset=utf8");

$positionId=$_POST['positionId'];
$comId=$_POST['comId'];
$positionName=$_POST['positionName'];
$positionIndustry=$_POST['positionIndustry'];
$positionType=$_POST['positionType'];
$positionArea=$_POST['positionArea'];
$positionSite=$_POST['positionSite'];
$positionNum=$_POST['positionNum'];
$positionEduRequire=$_POST['positionEduRequire'];
$positionSalary=$_POST['positionSalary'];
$positionResponsibility=$_POST['positionResponsibility'];
$positionRequirement=$_POST['positionRequirement'];


$q="insert into position(positionId,comId,positionName,positionIndustry,positionType,positionArea,positionStie,positionNum,positionEduRequire,positionSalary,positionResponsibility,positionRequirement) values('$positionId','$comId','$positionName','$positionIndustry','$positionType','$positionArea','$positionSite','$positionNum','$positionEduRequire','$positionSalary','$positionResponsibility','$positionRequirement');";//向数据库插入表单传来的值的sql
$con->query('SET NAMES UTF8');
$result=$con->query($q);//执行sql

if(!$result){
    echo "发送失败";
}else{
    echo "发送成功";
}
