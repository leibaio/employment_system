<?php
    //1.连接数据库
    $link = mysqli_connect('localhost:3308','root');
    //var_dump($link);//php中的调试函数，用于判断一个变量的类型与长度，

    //2.判断连接是否成功
    if(!$link){
        echo "数据库连接失败";
    }else{
        echo "数据库连接成功";
    }
    //3.设置字符集
    mysqli_set_charset($link,'utf8');

    //4.选择数据库
    mysqli_select_db($link, 'employment_system');

    //5.准备sql语句 //select update insert delete
    $sql = "select * from student";

    //6.发送sql语句
    $res = mysqli_query($link, $sql);
    //var_dump($res);

    //7.处理结果集
    /*$result = mysqli_fetch_assoc($res);
    $result = mysqli_fetch_assoc($res);
    var_dump($result);*/

    /*while ($rows = mysqli_fetch_assoc($res)){
        var_dump($rows);
    }*/

    $result = mysqli_fetch_row($res);
    var_dump($result);

    //8.关闭数据库
    mysqli_close($link);
