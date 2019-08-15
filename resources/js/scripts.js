/* eslint-env jquery */


$('document').ready(function() { 

        
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


});
