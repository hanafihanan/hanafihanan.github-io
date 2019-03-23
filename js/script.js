$(document).ready(function(){
    $('.sidenav').sidenav();
    
    // console.log($('social').offset().top);

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        dist: 0
      });
  
  });

  $('.page-scroll').on('click',function(e){
	//menangkap href
	var tujuan = $(this).attr('href');
	//mengambil elemen
	var elemenTujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000);

	// e.preventDefalut();

});

  $(window).scroll(function() {
	const wr = $(this).scrollTop();
    const nav = document.querySelector('nav');
    
    // console.log(wr);
    // if (wr>100){
    //     nav.classList.add('orange');
    // }else{
    //     nav.classList.remove('orange');
    // }

    if (wr>$('#social').offset().top) {
        nav.classList.add('orange');
    }else{
        nav.classList.remove('orange');
    }
    
});
//   $(document).scroll(function(){
//     const wr = $(this).scrollTop();
//     if (wr < $('.car').offset().top - 100) {
		
// 		nav.classList.remove('animate');	
// 	}else{
// 		nav.classList.add('animate');
// 	}

//   });