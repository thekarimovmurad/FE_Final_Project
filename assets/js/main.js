    setTimeout(() => {
        $(".pageloader").fadeToggle();
        AOS.init({ once: true })
    }, 1500)
    $(document).ready(function() {
        $('.portfolio-buttons button').on("click", function() {
            $('.portfolio-buttons button').removeClass('activate');
            $(this).addClass('activate');
            $('.portfolio-items #portfolio-item').addClass('d-none');
            var value = $(this).attr('data-filter');
            console.log(value)
            $('#portfolio-item' + value).removeClass('d-none');
        })

        $(".testimonial-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });

        updateNav();
        updateScroller();
        $(window).scroll(function() {
            updateNav();
            updateScroller();
        });

        function updateNav() {
            if ($(window).scrollTop() > 30) {
                $(".navbar").addClass("scrolled");
                $("#white").addClass("d-none");
                $("#colorfull").removeClass("d-none");

            } else {
                $(".navbar").removeClass("scrolled");
                $("#colorfull").addClass("d-none");
                $("#white").removeClass("d-none");
            }
        }

        function updateScroller() {
            if ($(window).scrollTop() > 100) {
                $(".scroll-top").fadeIn(200);
            } else {
                $(".scroll-top").fadeOut(200);
            }
        }
        $(document).on("click", ".scroll-top", function() {
            $(window).scrollTop(0);
        })
        GLightbox({
            'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
            'type': 'video',
            'source': 'youtube',
            'width': 900,
            'autoplayVideos': true,
            'delay': 5000
        });
        $("#team .team-item").hover(function() {
            $(this).children(".social-media").toggleClass("d-none");
        });
        $(document).on("click", ".accordions .accordion-head", function() {
            $(".accordions .accordion-body").slideUp();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).children("i").removeClass("bi-dash").addClass("bi-plus");
            } else {
                $(".accordions .accordion-head").children("i").removeClass("bi-dash").addClass("bi-plus");
                $(".accordions .accordion-head").removeClass("active")
                $(this).addClass("active");
                $(this).next(".accordions .accordion-body").slideDown();
                $(this).children("i").removeClass("bi-plus").addClass("bi-dash");
            }
        });
        // $(window).resize(function() {
        // if (window.matchMedia('(max-width: 768px)').matches) {
        // $("#faq .accordions").children("div").removeClass("col-lg-6");
        // $("#faq .accordions").children("div").addClass("col-12");
        // }
        // });

    });