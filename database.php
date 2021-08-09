<!DOCTYPE html>
<html lang="kr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title> php에서 데이터베이스</title>
    <?php
    $conn=mysqli_connect('localhost','test','9786','web');
    $sql = "SELECT * FROM TEST";
    $result = mysqli_query($conn,$sql);
    ?>
  </head>
  <body>
    <?php
    while ($row= mysqli_fetch_array($result)) {
      echo $row['auto_id'];
      echo $row['result_mbti'];
      echo $row['selected_job'];
      echo $row['datetime'];
    }
    ?>
  </body>
</html>
