
// popup
const popClose = document.querySelector('.pop_close')
const pop = document.querySelector('.pop')

popClose.addEventListener('click', function () {
  pop.style.display = 'none'
})

if($.cookie('stoppop') != 'no') { $('.pop').show()}


$('.pop_day').on('click',function() {
  $.cookie('stoppop','no',{expires:1})
  // 가상의 이름, 가상 value, 일수
  // 클릭한 경우 쿠키의 value값을 no로 세팅
  $('.pop').fadeOut('fast')
})


// 모바일 & 태블릿



// 스크롤 이벤트
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    $('#mtsection header').addClass('on')
  } else {
    $('#mtsection header').removeClass('on')
  }
})


// 메인 이미지 슬릭
$('.fullimg').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  mouseOnHover: false,
  pauseOnHover: false,
  pauseOnFocus: false
})

// down 화살표
$('#section1 .scroll').click(function () {
  const sec2 = $('#section2').offset().top
  const sec2To = sec2 - 50
  $('html, body').animate({
    scrollTop: sec2To
  }, 1000)
})


// section2
$('.slick ul').slick({
  dots: false,
  autoplay: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  mouseOnHover: false,
  pauseOnHover: false
})

setInterval(function () {
  const contentH2 = $('#section2 .slick-active').find('.camera').attr('alt')
  const contentP = $('#section2 .slick-active').find('.camera').attr('data-content')

  $('#section2 .content h3').text(contentH2)
  $('#section2 .content p').text(contentP)
})

winwid = $(window).width()


// section3 More

if (winwid < 640) {

  $('.grid ul li').css('display', 'none')

  function listMore() {
    let size_li = $('.grid ul li').size()

    $('.grid ul li').slice(0, 4).show()

    $('.grid .button').click(function () {
      $('.grid ul li:hidden').slice(0, 2).show()
    })
  }

  listMore()

  // section3 modal

  $('.grid ul li a').click(function(e) {
    e.preventDefault()

    const modalMain = $(this).attr('href')
    const content = $(this).parent().index()

    $('.mmodal').addClass('modalon')
    $('.modalbox .modalimg').attr('src', modalMain)

    $('.mmodal .content p').stop().hide()
    $('.mmodal .content p').eq(content).stop().show()

  })

  $('.mmodal span').click(function() {
    $('.mmodal').removeClass('modalon')

  })

}



// section3 tablet
if (winwid >= 640 && winwid < 801) {
  $('.grid ul').slick({
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    mouseOnHover: false,
    pauseOnHover: false
  })

  $('.mainimg .content p:nth-child(1)').stop().show()

  $('.grid ul li a').click(function (e) {
    e.preventDefault()
    const change = $(this).attr('href')
    const thisNum = Number($(this).attr('href').slice(15, 16)) - 1

    $('.mainimg img').attr('src', change)
    $('.mainimg .content p').stop().hide()
    $('.mainimg .content p').eq(thisNum).stop().show()
  })
}


// section4 fadeInOut

const roll = $('.indicator span')
const lens = $('.slidelens > li')

let num = 0

$('.slidelens > li:nth-child(1)~').stop().hide()

for (let i = 0; i < roll.length; i++) {
  roll.eq(i).click(function () {
    roll.removeClass('on')
    roll.eq(i).addClass('on')

    lens.stop().fadeOut(500)
    lens.eq(i).fadeIn(1000)

    return num = i
  })
}

const notMove = setInterval(function () {
  num++
  if (num > 3) {
    num = 0
  }
  roll[num].click()
}, 8000)

AOS.init({
  duration: 1000
})




// section2 타이핑
let target = document.querySelector('#typing')

function random(limit) {
  return Math.trunc(Math.random() * limit + 1)
}

function string() {
  let stringArr = ["카메라의 정점, 캐논으로 찍다.",
  "EOS R, 풀프레임 미러리스의 새로운 기준",
  "사진과 영상 그 프레임을 넘어서다."];

  let selecString = stringArr[Math.floor(Math.random() * stringArr.length)]
  let selecStringArr = selecString.split('')
  return selecStringArr
}

function resetTyping() {
  target.textContent = ""

  typing(string())
}

function typing(arr) {
  if (arr.length > 0) {
    target.textContent += arr.shift()
    setTimeout(function () {
      typing(arr)
    }, random(3)*100)
  } else {
    setTimeout(resetTyping, 5000)
  }
}

typing(string())



function blink() {
  target.classList.toggle('active')
}

setInterval(blink, 400)



// section1 타이핑
let target2 = document.querySelector('#typing2')

function string2() {
  let stringArr2 = ["쾌적, 쾌속, 고화질의 실현"]
  let selecArr2 = stringArr2[0].split("")

  return selecArr2
}

function resetTyping2() {
  target.textContent = ""

  typing2(string2())
}

function typing2(arr) {
  if (arr.length > 0) {
    target2.textContent += arr.shift()
    setTimeout(function () {
      typing2(arr)
    }, 150)
  }
  else if (arr.length = 0) {
    setTimeout(resetTyping2, 10000)
  }
}



$('#pcsection2 .slideGallery .gallery').slick({
  dots: false,
  vertical:true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  verticalSwiping: true
})


$('.slideGallery a').click(function(e) {
  e.preventDefault()

  $('#pcmodal').stop().fadeIn()

  let change = $(this).attr('href')
  $('.modalbox > img').attr('src',change)

  let thisIn = Number($(this).attr('href').slice(15,16)) - 1
  $('.modalbox .contents').stop().hide()
  $('.modalbox .contents').eq(thisIn).stop().show()
  
})


$('#pcmodal').click(function() {
  $(this).stop().fadeOut()
})


$('#desksection section').mousewheel(function(e){
  if(e.deltaY < 0) {
    let nextSection = $(this).next().offset().top

    $('html,body').stop().animate({
      scrollTop: nextSection
    },1000)

    if ($('#pcheader').attr('class') == 'slide') {
      return false
    } else {
    $('#pcheader').addClass('slide')
    }

    if ($('#pcmodal').is(':visible')) {
      $('#pcmodal').stop().fadeOut()
    }

    if($('#pcsub').is(':visible')) {
      $('#pcsub').stop().slideUp('slow')
      $('#pcheader .join').stop().fadeOut()
    }
  } else {
    let prevSection = $(this).prev().offset().top

    $('html, body').stop().animate({
      scrollTop: prevSection
    },1000)

    if ($('#pcheader').attr('class') == 'slide') {
      $('#pcheader').removeClass('slide')
    }
  }
})



$('#pcsection1').waypoint(function() {
  $('.back2 img').addClass('ani')
  $('.back2 .box').addClass('ani')

  if($('#typing2').text() == '') {
    setTimeout(function() {
      typing2(string2())
    },4000)
  } else { return false}

  $('#pcsection1 .button').addClass('ani')

}, {
  offset: '75%'
})

// $('#pcsection2').waypoint(function() {


// }, {
//   offset: '75%'
// })

$('#pcsection3, #pcsection4').waypoint(function() {
  $(this).find('h3').addClass('ani')
})

$('#pcheader .join a').click(function() {
  
})


$('#pcsection3 .camera_slide').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
})

$('#pcsection4 .lens_slide').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
})