

function inputImg() {
  for(let i = 1; i <= 7; i++) {
    $('.slide_product').append(`<img src="./img/detail/eos-r5_0${i}.jpg"/>`)
  }
}

inputImg()

$('.slide_product').slick({
  dots: true,
  autoplay: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
})

$('.option_item ul').slick({
  dots: false,
  autoplay: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true
})

function inputImg2() {
  for(let i = 1; i <= 5; i++) {
    $('.event_banner').append(`<img src="./img/detail/banner0${i}.jpg"/>`)
  }
}
inputImg2()

$('.event_banner').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true
})

function inputImg3() {
  for(let i = 1; i <= 15; i++) {
    $('.contents').append(`<img src="./img/detail/contents${i}.jpg"/>`)
  }
}

inputImg3()

$('ul.tab li a').click(function() {
  $('ul.tab li').removeClass('active')
  $(this).parent().addClass('active')
})