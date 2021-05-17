$(function(){
  
    
    /*Fixed Header*/
    
    let header=$("#header");
    let intro=$("#intro");
    let introH=intro.innerHeight();
    let scrrolPos=$(window).scrollTop();
    let nav=$("#nav");
    let navToggle=$("#navToggle");
    
    checkScroll(scrrolPos,introH);
    
    $(window).on("scroll load resize", function(){
        
        
        introH=intro.innerHeight();
        scrrolPos=$(this).scrollTop();
     
        checkScroll(scrrolPos,introH);
        
    });
    
    
    function checkScroll(scrrolPos,introH){
        
        
        if(scrrolPos > introH){
           
            header.addClass("fixed");
            
           } else{
           
             header.removeClass("fixed");
               
           }
        
    }
    
    /*Smooth Scroll*/
    
    
    $("[data-scroll]").on("click", function(event){
        
        event.preventDefault();
        
        let elementId=$(this).data('scroll');
        let elementOffSet=$(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
            
            scrollTop: elementOffSet - 70
            
        }, 700);
        
        
    })
    
    
    /*Nav Taggle*/
    
    
    
    navToggle.on("click", function(event){
        
        event.preventDefault();
        
        nav.toggleClass("show");
        
    });
    
    
        /*Reviews: https://kenwheeler.github.io/slick/*/
    
    let slider=$("#reviewsSlider");
    
    
    slider.slick({
        
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
        arrows: false,
        dots: true
        
        
    });
		
    
    
    
    
    
    
  });