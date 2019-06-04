<?php

include('./lib/conn.php');

$mobile=$_REQUEST['mobile'];
$password=$_REQUEST['password'];


$sql = "select * from users where user_mobile=$mobile";

$result=$mysqli->query($sql);

if($result->num_rows>0){//num_rows检测用户名是否存在
    die('手机号已存在');
}
$insertSql="insert into users(user_mobile,user_psw)values($mobile,'$password')";//num属性是整数 所以不用写引号

$res=$mysqli->query($insertSql);

if($res){
    echo '<script>alert("注册成功");location.href="../src/html/login.html"</script>';
}
$mysqli->close();//关闭连接
?>