<?php
  $host = 'localhost';
  $user = 'mbti';
  $pw = '9786';
  $dbName = 'WEB';
  $mysqli = new mysqli($host, $user, $pw, $dbName);
  if($mysqli){
    echo "mysql 접속 성공";
  }else{
    echo "mysql 접속 실패";
  }

 ?>
