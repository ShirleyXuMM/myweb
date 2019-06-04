<?php
header("content-type:text/html;charset=utf-8");
$mysql_conf=array(
    'host'=>'localhost:3306',
    'db_user'=>'root',
    'db_psw'=>'',
    'db'=>'h5-1903-shirley'
);

//连接数据库
$mysqli=@new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_psw']);

//判断数据库是否连接成功
if($mysqli->connect_errno){//php函数调用
    //die终止代码的执行
    die('连接错误'.$mysqli->connect_errno);//显示错误编码
}
$mysqli->query("set names 'utf8';");//设置编码

//选择数据库
$select_db=$mysqli->select_db($mysql_conf['db']);

//检查数据库是否选择成功
if(!$select_db){
    die('选择数据库错误'.$mysqli->error);
}
?>