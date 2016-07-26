if (window.jQuery){
  //highlights current nav element based on which anchor was just passed
  $(window).scroll(function(){
    var aboutAnchor=$("#ABOUT").get();
    var aboutAnchorPosition=$(aboutAnchor).offset().top;
    var aboutNav=$("#About").get();
    var conferenceAnchor=$("#CONFERENCE").get();
    var conferenceAnchorPosition=$(conferenceAnchor).offset().top;
    var conferenceNav=$("#Conference").get();
    var sponsorAnchor=$("#SPONSOR").get();
    var sponsorAnchorPosition=$(sponsorAnchor).offset().top;
    var sponsorNav=$("#Sponsor").get();
    var contactAnchor=$("#CONTACT").get();
    var contactAnchorPosition=$(contactAnchor).offset().top;
    var contactNav=$("#Contact").get();
    var eventsNav=$("#Events").get();
    var top_window=$(window).scrollTop()+$(window).height()*0.08; //approximate proportion of anchor position and nav height
    if (top_window>aboutAnchorPosition){
      $(aboutNav).addClass('current');
      $(conferenceNav).removeClass('current');
      $(sponsorNav).removeClass('current');
      $(contactNav).removeClass('current');
      $(eventsNav).removeClass('current');
    }
    else $(aboutNav).removeClass('current');
    if (top_window>conferenceAnchorPosition){
      $(aboutNav).removeClass('current');
      $(conferenceNav).addClass('current');
      $(sponsorNav).removeClass('current');
      $(contactNav).removeClass('current');
      $(eventsNav).removeClass('current');
    }
    if (top_window>sponsorAnchorPosition){
      $(aboutNav).removeClass('current');
      $(conferenceNav).removeClass('current');
      $(sponsorNav).addClass('current');
      $(contactNav).removeClass('current');
      $(eventsNav).removeClass('current');
    }
    if (top_window>contactAnchorPosition){
      $(aboutNav).removeClass('current');
      $(conferenceNav).removeClass('current');
      $(sponsorNav).removeClass('current');
      $(contactNav).addClass('current');
      $(eventsNav).removeClass('current');
    }
    if (location.pathname.split(/[\\\/]+/).pop()=="events.html"){
      $(aboutNav).removeClass('current');
      $(conferenceNav).removeClass('current');
      $(sponsorNav).removeClass('current');
      $(contactNav).removeClass('current');
      $(eventsNav).addClass('current');
    }
  });

  //changes appearance of nav by adding class 'scrolled'
  $(window).scroll(function(){
    var top_object=$("#title").offset().top;
    var top_window=$(window).scrollTop()+$(window).height()*0.05; //approximate proportion of nav to screen
    if (top_window>top_object) $('#nav').addClass('scrolled');
    else $('#nav').removeClass('scrolled');
  });

  //fades in pics of core5 once scrolled
  $(window).scroll(function(){
    var n=parseInt($('.fadeIn').css('top'),10); //accounts for different between exec and fadeIn top positioning
    $('.exec').each(function(i){
      var top_object=$(this).offset().top-(parseInt($(this).css('top'),10)-n);
      var bottom_window=$(window).scrollTop()+$(window).height();
      if (bottom_window>top_object){
        $(this).addClass('popIn');
      }
    });
  });

  //fades in elements as scroll down
  $(window).scroll(function(){
    $('.fadeIn').each(function(i){
        var top_object=$(this).offset().top;
        var top_window=$(window).scrollTop()+$(window).height();
        if (top_window>top_object){
          $(this).addClass('popIn');
        }
    });
  });

  //animated scroll to anchors on page
  $(document).ready(function(){
    $('a[href*=#]:not([href=#])').click(function(){
      if (location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
        var target=$(this.hash);
        target=target.length?target:$('[name='+this.hash.slice(1)+']');
        if (target.length){
          $('html,body').stop().animate({
            scrollTop:target.offset().top
          },500,'swing');
          return false;
        }
      }
    });
  });
}
