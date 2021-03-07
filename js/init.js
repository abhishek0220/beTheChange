(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space

  (function ($) {
    $(document).ready(function(){
  
      // hide .navbar first
      $(".navbar-fixed").hide();
  
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > $("#index-banner").height()) {
                  $('.navbar-fixed').fadeIn();
              } else {
                  $('.navbar-fixed').fadeOut();
              }
          });
      });
  
  });
    }(jQuery));