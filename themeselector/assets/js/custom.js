  jQuery( document ).ready(function() {
  if( jQuery('body').hasClass('themetechmount-one-page-site') ){
    var sections = jQuery('.tm-row, #tm-header-slider'),
    nav          = jQuery('.mega-menu-wrap, div.nav-menu'),
    nav_height   = jQuery('#site-navigation').data('sticky-height')-1,
    viewdemo_button=jQuery('#view_demos');
    
    jQuery(window).on('scroll', function () {
      
      // active first menu
      if( jQuery('body').scrollTop() < 5 ){
        nav.find('a').parent().removeClass('mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item');            
        nav.find('a[href="#tm-home"]').parent().addClass('mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item');
      }     
        
        var cur_pos = jQuery(this).scrollTop(); 
        sections.each(function() {
          
          var top = jQuery(this).offset().top - (nav_height+2),
          bottom = top + jQuery(this).outerHeight(); 
    
          if (cur_pos >= top && cur_pos <= bottom) {
            
            
    
            if( typeof jQuery(this) != 'undefined' && typeof jQuery(this).attr('id')!='undefined' && jQuery(this).attr('id')!='' ){
              
              var mainThis = jQuery(this);              
              nav.find('a').removeClass('mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item');           
              jQuery(this).addClass('mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item');
              var arr = mainThis.attr('id');              
              
              // Applying active class
              nav.find('a').parent().removeClass('mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item');
              nav.find('a').each(function(){
                var menuAttr = jQuery(this).attr('href').split('#')[1];           
                if( menuAttr == arr ){
                  jQuery(this).parent().addClass('mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item');
                }
              })
            
            }
          }
        });
      //}
    });
    
    jQuery('#view_demos').on('click', function () {
      var $el = jQuery(this), 
      id = $el.attr('href');
      var arr=id.split('#')[1];   
      jQuery('html, body').animate({
        scrollTop: jQuery('#'+ arr).offset().top - nav_height
      }, 500);  
      return false;
    });
    
  }
  });


/*------------------------------------------------------------------------------*/
/* Page slide
/*------------------------------------------------------------------------------*/

    $(".page-slide").owlCarousel({  
        loop:true,
        margin:0,
        nav: $('.page-slide').data('nav'),
        dots: $('.page-slide').data('dots'),                     
        autoplay: $('.page-slide').data('auto'),
        smartSpeed: 3000,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            768:{
                items:3
            },
            1200:{
                items: $('.page-slide').data('item')
            }
        }
    });

    /*------------------------------------------------------------------------------*/
/* Page slide
/*------------------------------------------------------------------------------*/

 $(".inner-page-slide").owlCarousel({

        loop:true,
        center:true,
        margin:0,
        nav: $('.inner-page-slide').data('nav'),
        dots: $('.inner-page-slide').data('dots'),                     
        autoplay: $('.inner-page-slide').data('auto'),
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items: $('.inner-page-slide').data('item')
            }
        }
    });


// =====1: history slide ==== 

    $(".history-slide").owlCarousel({  
        loop:true,
        margin:0,
        nav: $('.history-slide').data('nav'),
        dots: $('.history-slide').data('dots'),                     
        autoplay: $('.history-slide').data('auto'),
        smartSpeed: 3000,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items: $('.history-slide').data('item')
            }
        }
    });
    

    
/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/

// ===== Scroll to Top ==== 
jQuery('#totop').hide();
jQuery(window).scroll(function() {
    "use strict";
    if (jQuery(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        jQuery('#totop').fadeIn(200);    // Fade in the arrow
        jQuery('#totop').addClass('top-visible');
    } else {
        jQuery('#totop').fadeOut(200);   // Else fade out the arrow
        jQuery('#totop').removeClass('top-visible');
    }
});
jQuery('#totop').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
});
  