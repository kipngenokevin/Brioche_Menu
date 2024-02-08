window.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    var slides = document.querySelectorAll("#artcaffe-slideshow img");
    
    function nextSlide() {
        slides[slideIndex].style.transform = "translateX(-100%)";            
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.transform = "translateX(0)";
    }

    setInterval(nextSlide, 4000);
    });
    //Second slideshow on the page
    window.addEventListener("DOMContentLoaded", function() {
    var slideIndex1 = 0;
    var slides1 = document.querySelectorAll("#artcaffe-slideshow-1 img");
    
    function nextSlide1() {
        slides1[slideIndex1].style.transform = "translateX(-100%)";            
        slideIndex1 = (slideIndex1 + 1) % slides1.length;
        slides1[slideIndex1].style.transform = "translateX(0)";
    }

    setInterval(nextSlide1, 4000);
    });