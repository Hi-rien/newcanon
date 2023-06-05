

// 햄버거 메뉴
$('.hamburger').click(function () {
  $('.hamsection').stop().fadeIn()
  $(this).children().addClass('on')

  $('.close p').addClass('on')
})

$('.close').click(function () {
  $('.hamsection').stop().fadeOut()
  $(this).children().removeClass('on')

  $('.hamburger p').removeClass('on')
})

$('.ham_sub').stop().hide()
$('.ham_main > li > a').click(function () {
  $('.ham_sub').stop().slideUp()
  if ($(this).next().is(':visible')) {
    $(this).next().stop().slideUp()
  } else {
    $(this).next().stop().slideDown()
  }
})



// pc header

$('#pcsub').stop().hide()
$('#pcheader .join').stop().hide()
$('.logo_banner').click(function () {
  if($('#pcsub').is(':visible')) {
    $('#pcsub').stop().slideUp('slow')
    $('#pcheader .join').stop().fadeOut()
  }else {
    $('#pcsub').stop().slideDown('slow')
    $('#pcheader .join').stop().fadeIn()
  }

  $('#pcheader').removeClass('slide')


})


// top으로 이동
const toTop = document.querySelector('#top')

toTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

// 스크롤 이벤트
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    $('#top').addClass('show')
    $('#side').addClass('up')

  } else {
    $('#top').removeClass('show')
    $('#side').removeClass('up')
  }
})
