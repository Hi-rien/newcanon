
<?
  session_start();
?>

<meta charset="utf-8">

<?
  $name = $_POST['name'];
  $id = $_POST['id'];
  $pass = $_POST['pass'];
  $hp = $_POST['hp'];
  $email = $_POST['email'];
  $addr = $_POST['addr'];
  $agree = $_POST['agree'];
  $agree2 = $_POST['agree2'];


  if(!$agree == '1' && !$agree2 == "1") {
    echo ("
    <script>
      history.go(-1)
    </script>
  ");
  exit;
  }

  include "dbinit.php";
  mysqli_query($connect, "set names utf8");

  $sql = "select * from member where id='$id'";
  $result = mysqli_query($connect, $sql);
  $exit_id = mysqli_num_rows($result);

  if($exit_id) {
    echo ("
      <script>
        window.alert('해당 아이디가 존재합니다.')
        history.go(-1)
      </script>
    ");
    exit;
  } else { 
    $sql = "insert into member(id,pass,name,hp,email,addr)";
    $sql .= "values('$id','$pass','$name','$hp','$email','$addr')";

    mysqli_query($connect, $sql);
  }
  mysqli_close(($connect));

  echo "<script> window.alert('회원가입이 완료 되었습니다. 로그인 해주세요'); location.href = 'login.html'; </script>"

?>