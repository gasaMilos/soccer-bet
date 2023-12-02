//PROMO SLIDER
    if($('.promo-slider').length>0){
        $('.promo-slider').owlCarousel({
            
            autoplayHoverPause:true,
            autoWidth: true,
            autoplay:true,
            loop:true,
            responsive:{
                0:{
                    items:1,
                    slideBy:1
                },
                550:{
                    items:2,
                    margin:0,
                    slideBy:1
                },
                900:{
                    items:3,
                    margin:0,
                    slideBy:1
                },
                1200:{
                    items:3,
                    margin:0,
                    slideBy:1
                }
            }
        });
    };
    
    //MENU SLIDER
    if($('.menu-slider').length>0){
        $('.menu-slider').owlCarousel({
            
            autoplayHoverPause:false,
            autoWidth: true,
            autoplay:false,
            loop:false,
            dots:false,
            nav:true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    
                    slideBy:1
                },
                550:{
                    
                    margin:0,
                    slideBy:1
                },
                900:{
                    
                    margin:0,
                    slideBy:1
                },
                1200:{
                    
                    margin:0,
                    slideBy:1
                }
            }
        });
    };


