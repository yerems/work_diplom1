



$(".carusel").slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:1,
    
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        },
        
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$(".gellery-carusel").slick({
    infinite:false,
    prevArrow:$(".prev-gallery"),
    nextArrow:$(".next-gallery"),
    slidesToShow:2,
    dots:true,
    responsive: [
        
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$(".reviews-carusel").slick({
    infinite:false,
    prevArrow:$(".prev-reviews"),
    nextArrow:$(".next-reviews"),
    slidesToShow:2,
    dots:true,
    responsive: [
        
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});