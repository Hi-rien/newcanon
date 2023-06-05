
    <header>
      <div class="head">
        <div class="hamburger">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <a href="./index.html">
          <h1>C<span>a</span>non</h1>
        </a>
        <img src="./img/Search_wh.png" alt="검색" class="search">
      </div>

      <div class="hamsection">

        <div class="topsec">
          <div class="close">
            <p></p>
            <p></p>
          </div>
          <div class="right">

            <?
            if($_SESSION['userid']) {
            ?>
            <span><?=$_SESSION['username']?> 님</span>
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

            <span><?=$_SESSION['username']?> 님</span>
            <a href="logout.php">로그아웃</a>

            <?
              } else {
            ?>

            <a href="./login.html">로그인</a>
            <a href="./join.html">회원가입</a>

            <?
              }
            ?>


          </div>
        </div>

        <div class="main_menu">
          <ul class="ham_main">
            <li>
              <a href="#">Camera</a>
              <ul class="ham_sub">
                <li><a href="./mirrorless.html">ALL</a></li>
                <li><a href="./mirrorless.html">DSLR</a></li>
                <li><a href="./mirrorless.html">미러리스</a></li>
                <li><a href="./mirrorless.html">컴팩트</a></li>
              </ul>
            </li>

            <li>
              <a href="#">Lens</a>
              <ul class="ham_sub">
                <li><a href="./mirrorless.html">ALL</a></li>
                <li><a href="./mirrorless.html">RF 렌즈</a></li>
                <li><a href="./mirrorless.html">EF 렌즈</a></li>
              </ul>
            </li>

            <li>
              <a href="#">Accessory</a>
              <ul class="ham_sub">
                <li><a href="./mirrorless.html">ALL</a></li>
                <li><a href="./mirrorless.html">카메라용</a></li>
                <li><a href="./mirrorless.html">렌즈용</a></li>
                <li><a href="./mirrorless.html">부품</a></li>
              </ul>
            </li>
          </ul>

          <ul class="ham_main">
            <li>
              <a href="#">C-Logue</a>
              <ul class="ham_sub">
                <li><a href="./mirrorless.html">ALL</a></li>
                <li><a href="./mirrorless.html">가방</a></li>
                <li><a href="./mirrorless.html">의류</a></li>
                <li><a href="./mirrorless.html">액세서리</a></li>
              </ul>
            </li>

            <li><a href="./mirrorless.html">etc.</a></li>
          </ul>
        </div>

        <div class="botsec">
          <a href="javascript:void(0)">다운로드센터</a>
          <a href="javascript:void(0)">정품등록</a>
        </div>
      </div>
    </header>