<?php
  $conn= mysqli_connect('localhost', 'mbti', '9786', 'WEB' );
  $result_mbti = ($_GET['hiddenMbti']);
  $selected_job = ($_GET['hiddenJob']);
  /*
  echo $result_mbti;
  echo $selected_job;
   */


   mysqli_query($conn, "set session character_set_connection=utf8;");
     mysqli_query($conn, "set session character_set_results=utf8;");
     mysqli_query($conn, "set session character_set_client=utf8;");
  $sql = "
    INSERT INTO MBTI
    (result_mbti, selected_job, datetime)
       VALUES(
        '{$result_mbti}',
        '{$selected_job}',
        NOW()
	)
";



  $result = mysqli_query($conn, $sql);
  if($result === false){
    echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요 ';
    error_log(mysqli_error($conn));
  }

  $sql_total_people = "SELECT COUNT(*) FROM MBTI WHERE result_mbti = '".$result_mbti."';";
  $result = mysqli_query($conn, $sql_total_people);
  $result = mysqli_fetch_array($result);
  $total = $result['COUNT(*)'];

  $sql = "SELECT selected_job, count(*) FROM MBTI WHERE result_mbti='".$result_mbti."' GROUP BY selected_job;";
  $result= mysqli_query($conn, $sql);

  $sql_total_mbti = "SELECT COUNT(*) FROM MBTI";
  $resultt = mysqli_query($conn, $sql_total_mbti);
  $resultt = mysqli_fetch_array($resultt);
  $total_mbti = $resultt['COUNT(*)'];
   /*$result_set = mysqli_fetch_array($result);*/

  /*while($row = mysqli_fetch_array($result)){
	  echo $row['selected_job']." ".$row['count(*)'];
	  echo '<br>';
  }*/


?>


<!doctype html>
<html>
<head>
    <title>STATISTICS</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="statistics_style.css">
</head>
<body>
    <div>
<?php
       $percent = round($total / $total_mbti * 100);
       echo" <p>{$percent}%의 <span>{$result_mbti}</span>
            가 <br>선호하는 직업의 순위는 <br>아래와 같습니다. </p>"
?>

	    </div>
    <br><br>

    <table>
        <th>NO.</th>
        <th>Name</th>
        <th>Value</th>
<?php

  	$i = 1;
	while($row = mysqli_fetch_array($result)){
	    $percentage = round($row['count(*)'] / $total * 100, 2);
	    echo "<tr>
            <td>{$i}</td>
            <td>{$row['selected_job']}</td>
            <td>{$percentage}%</td>
	   </tr>";
	  echo '<br>';
	  $i++;
	}

?>



    </table>

    <br><br><br><br><br><br>
    <div id="button">
        <a href="#" class="button">링크 공유하기</a>
    </div>
</body>
</html>
