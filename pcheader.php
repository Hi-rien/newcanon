<header id="pcheader">
      <div class="inner">
        <div class="join">

          <?
          if($_SESSION['userid']) {
          ?>

          <a href="./index.html">홈</a>
          <?=$_SESSION['username']?> 님
          <a href="logout.php">로그아웃</a>

          <?
          } else if($_COOKIE['c_id']) {

            $userid = $_COOKIE['c_id'];

            include "dbinit.php";

            mysqli_query($connect, 'set names utf8');
          
            $sql = "select * from member where id='$userid'";
            $result = mysqli_query($connect, $sql);
            $row = mysqli_fetch_array($result);
            
            $username = $row['name'];
            $_SESSION['username'] = $username

          ?>

          <?=$_SESSION['username']?> 님
          <a href="logout.php">로그아웃</a>


          <?
            } else {
          ?>
          <a href="./index.html">홈</a>
          <a href="./login.html">로그인</a>
          <a href="./join.html">회원가입</a>

          <?
            }
          ?>


        </div>
        <nav>
          <ul class="main_menu">
            <li><a href="./mirrorless.html">Camera</a></li>
            <li><a href="./mirrorless.html">Lens</a></li>
            <li><a href="./mirrorless.html">Accessory</a></li>
            <li><a href="./mirrorless.html">C-Logue</a></li>
            <li><a href="./mirrorless.html">ect.</a></li>
          </ul>
          <div id="pcsub">
            <ul class="sub_menu">
              <li><a href="./mirrorless.html">ALL</a></li>
              <li><a href="./mirrorless.html">DSLR</a></li>
              <li><a href="./mirrorless.html">미러리스</a></li>
              <li><a href="./mirrorless.html">컴팩트</a></li>
            </ul>
            <ul class="sub_menu">
              <li><a href="./mirrorless.html">ALL</a></li>
              <li><a href="./mirrorless.html">RF 렌즈</a></li>
              <li><a href="./mirrorless.html">EF 렌즈</a></li>
            </ul>
            <ul class="sub_menu">
              <li><a href="./mirrorless.html">ALL</a></li>
              <li><a href="./mirrorless.html">카메라용</a></li>
              <li><a href="./mirrorless.html">렌즈용</a></li>
              <li><a href="./mirrorless.html">부품</a></li>
            </ul>
            <ul class="sub_menu">
              <li><a href="./mirrorless.html">ALL</a></li>
              <li><a href="./mirrorless.html">가방</a></li>
              <li><a href="./mirrorless.html">의류</a></li>
              <li><a href="./mirrorless.html">액세서리</a></li>
            </ul>
            <ul class="sub_menu"></ul>
          </div>
        </nav>
        <div class="logo_banner">
          <h1>C<span>a</span>non</h1>
        </div>
      </div>
    </header>