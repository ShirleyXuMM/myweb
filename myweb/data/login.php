<?php
    include('./lib/conn.php');

    $mobile=$_REQUEST['sms_mobile'];
    $password=$_REQUEST['password'];

    $sql="select * from users where user_mobile=$mobile and user_psw='$password'";
   
    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        echo "<script>alert('登录成功，点击跳转');location.href='../src/html/happigo.html';</script>";
    }else{
        echo "<script>alert('登录失败，点击跳转');location.href='../src/html/login.html';</script>";
    }

?>