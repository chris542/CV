$(document).ready(function(){
  /*header color effect*/
  $('.header, #title').hover(function(){
    $('#title').css({color:'white', transition: 'all 2s ease'});
  });
  $('.header, #title').mouseout(function(){
    $('#title').css({color:'#77787b', transition: 'all 1s ease'} );
  });

  /*Navigation Section Size*/
  $('.nav').hover(function(){
    $(this).css({transform: 'scale(1.02,1.02)', transition: 'all 0.5s ease'} );
    $('.info').css({transform: 'scale(0.98,0.98)', transition: 'all 0.5s ease'});
  });
  $('.nav').mouseout(function(){
    $('.nav').css({transform: 'scale(1,1)', transition: 'all 0.5s ease'});
    $('.info').css({transform: 'scale(1,1)', transition: 'all 0.5s ease'});
  });

  /*Navigation Menu List Size*/
  $(".nav_ul > a").hover(function(){
    $('.nav_ul>a').removeClass('active_nav');
    $(this).addClass('active_nav');
    $('.nav').css({transform: 'scale(1.02,1.02)', transition : 'all 0.5s ease'} );
    $('.info').css({transform: 'scale(0.98,0.98)', transition: 'all 0.5s ease'});
  });
  $(".nav_ul > a").mouseout(function(){
    $('.nav_ul>a').removeClass('active_nav');
    $('.nav').css({transform: 'scale(1,1)', transition: 'all 0.5s ease'});
    $('.info').css({transform: 'scale(1,1)', transition: 'all 0.5s ease'});
  });

 $(function() {
   $( "#accordion" ).accordion();
 });
 
});

function profileClicked(){
  $(".info_top").load("pages.html #profile_top");
  $(".info_bottom").load("pages.html #profile_bottom");
}
function resumeClicked(){
  $(".info_top").load("pages.html #resume_top");
  $(".info_bottom").load("pages.html #resume_bottom");
}
