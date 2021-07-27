<?php
  $host = 'localhost';
  $user = 'mbti';
  $pw = '9786';
  $dbName = 'WEB';
  $mysqli = new mysqli($host, $user, $pw, $dbName);
  $conn= mysqli_connect('localhost', 'mbti', '9786', 'WEB' );
  $result_mbti = $_GET['mbti'];
  $selected_job = $_GET['job'];
  var_dump($_GET);
    $sql = "
      INSERT INTO Mbti
        (result_mbti, selected_job, datetime)
        VALUE(
          '{$result_mbti}',
          '{$selected_job}',
          NOW()
        )
  ";
  $result = mysqli_query($conn, $sql);
  if($result === false){
    echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요 ';
    error_log(mysqli_error($conn));
  } else{
    echo '성공했습니다. <a href= "database.php"></a>';
  }
  echo $sql;
?>
