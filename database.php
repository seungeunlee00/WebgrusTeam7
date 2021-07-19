<?php
$conn=mysqli_connect('localhost','test','9786','TEST');
$sql = "SELECT * FROM TEST";
$result = mysqli_query($conn,$sql);
var_dump($result);

?>
