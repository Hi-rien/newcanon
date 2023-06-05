

<?

  $id = $_POST['id'];

  if(!$id) {
    echo("아이디를 입력하세요.");
  } else {

    include "dbinit.php";
    mysqli_query($connect, "set names utf8");

    $sql = "select * from member where id='$id'";

    $result = mysqli_query($connect, $sql);

    $num_record = mysqli_num_rows($result);

    if($num_record) {
      echo("존재하는 아이디 입니다.");
    } else {
      echo("사용 가능한 아이디입니다.");
    }
    mysqli_close($connect);
  }

?>