<?
  session_start();
?>

<?
  include "dbinit.php";
  mysqli_query($connect, 'set names utf8');

  $id = $_POST['id'];
  $hp = $_POST['hp'];

  $sql = "select * from member where id='$id' AND hp='$hp'";
  $result = mysqli_query($connect, $sql);
  $num_match = mysqli_fetch_array($result);

  if(!empty($num_match)) {
    echo ("회원님의 비밀번호는 $num_match[pass]입니다.");
  } else {
    echo ("일치하는 정보가 없습니다.");
  }
  mysqli_close($connect);

?>