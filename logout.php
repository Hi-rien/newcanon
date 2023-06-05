<?
  session_start();

  unset($_SESSION['userid']);
  unset($_SESSION['username']);
  // unset()함수를 사용하여 PHP의 배열에서 요소 삭제
  // 세션 종료

  if($_COOKIE['c_id']) {
    setcookie("c_id",$id,(time()-86400),"/");
  }

 
  echo("
       <script>
          window.alert('로그아웃 되었습니다.')
          location.href = 'index.html'; 
        </script>
       ");
?>
