<?
  session_start();
?>

<?
  include "dbinit.php";
  mysqli_query($connect, 'set names utf8');

  $name = $_POST['name'];
  $hp = $_POST['hp'];

  $sql = "select * from member where name='$name' AND hp='$hp'";
  $result = mysqli_query($connect, $sql);
  $num_match = mysqli_fetch_array($result);

  if(!empty($num_match)) {
    echo ("회원님의 아이디는 $num_match[id]입니다.");
  } else {
    echo ("일치하는 정보가 없습니다.");
  }
  mysqli_close($connect);

?>