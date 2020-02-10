$(function() {

    var intro_homepage = $('#th-intro.homepage');
    var possibilities = $('#th-possibilities');
    var manufacturers = $('#th-manufacturers');
    var building = $('#th-building');
    var feedbacks = $('#th-feedbacks');
    var concrete = $('#th-concrete');
    var qa = $('#th-qa');

    var cleaner_models = $('#cleaner-models');

    $('#th-open').on('click', function(){
        $('#th-menu').slideDown();
    });

    $('#th-close').on('click', function(){
        $('#th-menu').slideUp();
    });

    if(possibilities.length)
    {
        possibilities.find('ul.pt-list').find('li').on('click', function(){
            possibilities.find('ul.pt-list li').removeClass('active');
            $(this).addClass('active');

            possibilities.find('.pt-tabs .pt-tab').removeClass('active');
            possibilities.find('.pt-tabs .pt-tab').eq($(this).index()).addClass('active');
        });
    }
    if(manufacturers.length)
    {
        manufacturers.find('.owl-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            responsive:{
                0:{
                    items: 2,
                    margin: 50
                },
                768:{
                    items: 3,
                    margin: 50
                },
                1000:{
                    items: 4,
                    margin: 90
                },
                1270:{
                    items: 5,
                    margin: 90
                }
            }
        });
    }
    if(building.length)
    {
        $(document).ready(function() {

            var sync1 = $("#stages-slides");
            var sync2 = $("#stages-nav");

            var slidesPerPage = 4;
            var syncedSecondary = true;

            sync1.owlCarousel({
                items : 1,
                slideSpeed : 2000,
                nav: false,
                autoplay: false,
                dots: false,
                loop: true,
                responsiveRefreshRate : 200,
            }).on('changed.owl.carousel', syncPosition);

            sync2
                .on('initialized.owl.carousel', function () {
                    sync2.find(".owl-item").eq(0).addClass("current");
                })
                .owlCarousel({
                    items : slidesPerPage,
                    dots: false,
                    nav: true,
                    smartSpeed: 200,
                    slideSpeed : 500,
                    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                    responsiveRefreshRate : 100
                }).on('changed.owl.carousel', syncPosition2);

            function syncPosition(el) {
                //if you set loop to false, you have to restore this next line
                //var current = el.item.index;

                //if you disable loop you have to comment this block
                var count = el.item.count-1;
                var current = Math.round(el.item.index - (el.item.count/2) - .5);

                if(current < 0) {
                    current = count;
                }
                if(current > count) {
                    current = 0;
                }

                //end block

                sync2
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                var onscreen = sync2.find('.owl-item.active').length - 1;
                var start = sync2.find('.owl-item.active').first().index();
                var end = sync2.find('.owl-item.active').last().index();

                if (current > end) {
                    sync2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    sync2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }

            function syncPosition2(el) {
                if(syncedSecondary) {
                    var number = el.item.index;
                    sync1.data('owl.carousel').to(number, 100, true);
                }
            }

            sync2.on("click", ".owl-item", function(e){
                e.preventDefault();
                var number = $(this).index();
                sync1.data('owl.carousel').to(number, 300, true);
            });
        });
    }
    if(feedbacks.length)
    {
        feedbacks.find('.owl-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            responsive:{
                0:{
                    items: 1
                },
                769:{
                    items: 2
                }
            }
        });
    }
    if(qa.length)
    {
        qa.find('.qa-item .qa-question').on('click', function(){
            $(this).parent().toggleClass('active');
            $(this).parent().find('.qa-answer').slideToggle();
        });
    }

    $('.prj-goto').on('click', function(){
        $('.prj-goto').parents('.project').find('.prj-gallery .prjg-image').eq(0).trigger('click');
    });
    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        buttons: [
            "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close"
        ],
        thumbs: {
            autoStart : true,
            axis: 'x'
        },
        transitionEffect: "slide"
    });
    $('button#all-projects').on('click', function(){
        $('.projects-list').find('.project').show();
        $(this).hide();
    });


    if(intro_homepage.length)
    {
        // var calculator_top = $('#th-calculator').position().top - 50;
        // intro_homepage.find('button').on('click', function(){
        //     $('html, body').animate({scrollTop:calculator_top}, 'slow');
        // });
    }
    if(concrete.length)
    {
        concrete.find('.stock button').on('click', function(){
            $('html, body').animate({scrollTop:calculator_top}, 'slow');
        });
    }
    if(cleaner_models.length)
    {
        var cleaner_models_top = cleaner_models.position().top - 50;
        $('.intro-info button').on('click', function(){
            $('html, body').animate({scrollTop:cleaner_models_top}, 'slow');
        });
    }


    qa.find('.qa-connect button').on('click', function(){
        $('body').addClass('qa-popup');
    });
    $('#qa-popup').find('.popup-close').on('click', function(){
        $('body').removeClass('qa-popup');
    });

    intro_homepage.find('button').on('click', function(){
        $('body').addClass('help-popup');
    });
    $('#help-popup').find('.popup-close').on('click', function(){
        $('body').removeClass('help-popup');
    });



});
