
winwid = $(window).width()


// quick 메뉴

$('.quick_menu').stop().hide()
$('.add').click(function () {
  if ($(this).siblings('.quick_menu').is(':visible')) {
    $('.quick_menu').stop().slideUp()
    $(this).attr('src', './img/add-circle-red.png')
  } else {
    $('.quick_menu').stop().slideDown()
    $(this).attr('src', './img/minus-circle_red.png')
  }
})


// selected

$('.selected').click(function() {
  if($('.choice').is(':visible')) {
    $('.choice').stop().slideUp()
    $('.selected img').css({
      transform: "none"
    })
  } else {
    $('.choice').stop().slideDown()
    $('.selected img').css({
      transform: "rotate(180deg)"
    })
  }
})


let counNum = $('.count span')



$('.choice span').click(function() {
  
  let choice = $(this).text()
  let num = $(this).index()

  console.log(num)

  $('.selected span').text("")
  $('.selected span').text(choice)

  $('.choice').stop().slideUp()
  $('.selected img').css({
    transform: "none"
  })

  if(num == 0) {
    location.reload(true)
  } else if (num == 1) {
    counNum.text('4')
  } else if (num == 2) {
    counNum.text('3')
  } else {
    counNum.text('11')
  }

  let filter = $(this).attr('id')

  $('.list li').each(function() {
    const listAlt = $(this).attr('data-list')

    if(listAlt == filter) {
      $(this).stop().show()
    } else {
      $(this).stop().hide()
    }
  })

  if(filter == 'min') {
    const item = $('.item')
    const items = item.sort(function (a, b) {
      return parseInt($(a).find("p.price").text().replace(/[^0-9]/g, '')) <
        parseInt($(b).find("p.price").text().replace(/[^0-9]/g, '')) ? -1 :
        parseInt($(a).find("p.price").text().replace(/[^0-9]/g, '')) >
        parseInt($(b).find("p.price").text().replace(/[^0-9]/g, '')) ? 1 : 0;
    });

    $('.list li').stop().show()
    $('ul.list').html(items)
  }

  if(filter == 'max') {
    const item = $('.item')
    const items = item.sort(function (a, b) {
      return parseInt($(b).find("p.price").text().replace(/[^0-9]/g, '')) <
        parseInt($(a).find("p.price").text().replace(/[^0-9]/g, '')) ? -1 :
        parseInt($(b).find("p.price").text().replace(/[^0-9]/g, '')) >
        parseInt($(a).find("p.price").text().replace(/[^0-9]/g, '')) ? 1 : 0;
    });

    $('.list li').stop().show()
    $('ul.list').html(items)
  }

  soldOut()
})



// 품절 제외


$('#check').click(function() {
  $(this).toggleClass('on')
  soldOut()
})

function soldOut() {
  if($('#check').attr('class') == 'on') {
    $('.list li.soldout').stop().hide()
  } else {
    $('.list li.soldout').stop().show()
  }
}


soldOut()



if(winwid > 800) {
  $('body').mousewheel(function(e){
    if(e.deltaY < 0) {
    
      if ($('#pcheader').attr('class') == 'slide') {
        return 
      } else {
      $('#pcheader').addClass('slide')
      }
  
      if($('#pcsub').is(':visible')) {
        $('#pcsub').stop().slideUp('slow')
        $('#pcheader .join').stop().fadeOut()
      }
    } else {
    
      if ($('#pcheader').attr('class') == 'slide') {
        $('#pcheader').removeClass('slide')
      }
    }
  })
}

