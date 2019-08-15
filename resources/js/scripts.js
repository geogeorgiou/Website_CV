/* eslint-env jquery */


$('document').ready(function() { 

//       ANIMATION AT MOUSE ENTER ON CODING SKILLS
                
      
//        $('.js--hover-to-coding-skills').hover(function(){
//                $('.js--hover-to-coding-skills').addClass('animated bounce');
////                $('.js--hover-to-coding-skills').removeClass('animated bounce');
//        });
    
    
//        function play() {
//          $('#js--hover-to-coding-skills').addClass("animated bounce").removeClass("pause");
//        }
//
//        function pause() {
//          $('#js--hover-to-coding-skills').addClass("pause"); // don't remove .play here
//        }
//
//        $("#js--hover-to-coding-skills").hover(play, pause);   
    

//       
    
        // ONE PAGE SCROLL
//        $('.main').onepage_scroll();
    
//        ANIMATION ON START
        
        $('.js--fadeInDown-CV').addClass('animated fadeInDown');
    
        // ANIMATION SCROLL AT CLICK ON MENU 
    
    
        $('.js--scroll-to-banner').click(function(){
           $('html, body').animate({scrollTop: $('.js--banner').offset().top},1000); 
        });
    
        $('.js--scroll-to-about').click(function(){
           $('html, body').animate({scrollTop: $('.js--about').offset().top},1000); 
        });
    
        $('.js--scroll-to-education').click(function(){
           $('html, body').animate({scrollTop: $('.js--education').offset().top},1000); 
        });
    
        $('.js--scroll-to-coding-skills').click(function(){
           $('html, body').animate({scrollTop: $('.js--coding-skills').offset().top},1000); 
        });
    
        $('.js--scroll-to-contact').click(function(){
           $('html, body').animate({scrollTop: $('.js--contact').offset().top},1000); 
        });
    

        /* ANIMATION ON MANUAL SCROLL */
        
        $('.js--mscroll-to-main-details').waypoint(function() {
            $('.js--mscroll-to-main-details').addClass('animated fadeIn');
        }, {
            offset: '50%' //half of the page
        })
    
    
        
        $('.js--mscroll-to-coding-lang').waypoint(function() {
            $('.js--mscroll-to-coding-lang').addClass('animated fadeIn');
        }, {
            offset: '50%' //half of the page
        })
//    
//    
//        /* STICKY NAVIGATION CODE */
//    
//        $('.js--section-features').waypoint(function(direction){
//           
//           if (direction == "down"){
//                $('nav').addClass('sticky'); 
//           }
//            else{
//               $('nav').removeClass('sticky'); 
//           }
//            
//        }, {
//           offset: '60px;' 
//        });
//    
//        /* SCROLL ON BUTTONS */
//
//        $('.js--scroll-to-plans').click(function(){
//           $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000); 
//        });
//    
//        $('.js--scroll-to-start').click(function(){
//           $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000); 
//        });
//    
        /* SMOOTH NAVIGATION SCROLL */
    
        $(function() {
          
            var scrollLink = $('.scroll');
            
            //smooth scrolling
            
            scrollLink.click(function(e) {
                e.preventDefault();
                
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top
                },700);
            })
            
        });
//    
        
    

//        
//        $('.js--wp-2').waypoint(function() {
//            $('.js--wp-2').addClass('animated fadeInUp');
//        }, {
//            offset: '50%' 
//        })
//    
//        $('.js--wp-3').waypoint(function() {
//            $('.js--wp-3').addClass('animated fadeIn');
//        }, {
//            offset: '50%' //half of the page
//        })
//    
//        $('.js--wp-4').waypoint(function() {
//            $('.js--wp-4').addClass('pulse');
//        }, {
//            offset: '50%' //half of the page
//        })
//    
//        /* MOBILE NAVIGATION */
//        
//        $('.js--nav-icon').click(function(){
//            
//            /**********/
//            /* opens and closes menu */
//            
//            var nav = $('.js--main-nav');
//            
//            nav.slideToggle(200);
//            
//            /*********/
//            
//            /**********/
//            /* changes menu icon */
//            
//            var icon = $('.js--nav-icon i');
//            
//            if (icon.hasClass('ion-ios-menu')){
//                icon.addClass('ion-ios-close');
//                icon.removeClass('ion-ios-menu');
//            }else{
//                icon.addClass('ion-ios-menu');
//                icon.removeClass('ion-ios-close');
//            }
//            
//            /**********/
//            
//            
//        });
//        
        

});
