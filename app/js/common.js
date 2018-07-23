$('document').ready(function () {

var res1 = $('.head').height();

    // SLICK

    if($(document).width()>993){
        $(document).scroll(function () {
            // if()
            if($(document).scrollTop()>330){
                $('.head').addClass('scroll-on');
                $('.slider-box').css('margin-top', res1);

            }else {
                $('.head').removeClass('scroll-on');
                $('.slider-box').css('margin-top', "0");
            }



        })
    }
    $( window ).resize(function() {
        if($(document).width()>993){
            $(document).scroll(function () {
                // if()
                if($(document).scrollTop()>330){
                    $('.head').addClass('scroll-on');
                    $('.slider-box').css('margin-top', res1);

                }else {
                    $('.head').removeClass('scroll-on');
                    $('.slider-box').css('margin-top', "0");
                }



            })
        }
    });




    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.button-crest').click(function () {
        $('.thank-you').hide();

    });

    $('[data-form]').click(function () {
        $('.thank-you-form').show();
        return false;
    });

    //////////////////////////////////////////////////////email/////////////////////
    var patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    var patternPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
    var patternEmpty = /^[\s]+$/;
    $('input[type="text"]').on('mouseover',function () {
        $(this).css({'border':'1px solid #c3c3c3','background-color': '#fff'});
    });
    $('form').submit(function (event) {
        event.preventDefault();
        var mname =$(this).find('input[name="name"]').length > 0 ? $(this).find('input[name="name"]').val() : true ;
        var mnamec = $(this).find('input[name="company-name"]').length > 0 ? $(this).find('input[name="company-name"]').val() : true ;
        var mphone = $(this).find('input[name="phone"]').length > 0 ? $(this).find('input[name="phone"]').val() : true;
        var memail = $(this).find('input[name="mail"]').length > 0 ? $(this).find('input[name="mail"]').val() : true ;
        var patternP = $(this).find('input[name="phone"]').length > 0 ? patternPhone.test(mphone) : true;
        var patternE = $(this).find('input[name="mail"]').length > 0 ? patternEmail.test(memail) : true;
        var patternEName = $(this).find('input[name="name"]').length > 0 ? patternEmpty.test(mname) : false;
        var patternENameComp = $(this).find('input[name="company-name"]').length > 0 ? patternEmpty.test(mnamec) : false;
        var patternEPhone = $(this).find('input[name="phone"]').length > 0 ? patternEmpty.test(mphone) : false;
        var patternEMail = $(this).find('input[name="mail"]').length > 0 ? patternEmpty.test(memail) : false;
        if(!patternPhone.test(mphone)){
            $(this).find('input[name="phone"]').css({'border':'1px solid #c95656','background-color': '#fcdbdb'});
        }
        if(!patternEmail.test(memail)){
            $(this).find('input[name="mail"]').css({'border':'1px solid #c95656','background-color': '#fcdbdb'});
        }
        if(patternENameComp || mnamec == ""){
            $(this).find('input[name="company-name"]').css({'border':'1px solid #c95656','background-color': '#fcdbdb'});
        }
        if(patternEPhone || mphone == ""){
            $(this).find('input[name="phone"]').css({'border':'1px solid #c95656','background-color': '#fcdbdb'});
        }
        if(patternEName || mname == ""){
            $(this).find('input[name="name"]').css({'border':'1px solid #c95656','background-color': '#fcdbdb'});
        }
        if(patternEMail || memail == ""){
            $(this).find('input[name="mail"]').css({'border':'1px solid #c95656','background-color': '#fcdbdb'});
        }

        console.log(patternP,patternE);
        if(mname && mnamec && mphone && memail && patternP && patternE && !patternEName && !patternEPhone && !patternEMail && !patternENameComp){
            global = true;
            // var th = $(this);
            //
            // $.ajax({
            //     type: "POST",
            //     url: "mail.php", //Change
            //     data: th.serialize()
            // }).done(function() {
            //
            // });
            $('.thank-you').hide();
            $('.thank-you-finish').show();

        }
    })

    $('.phone').click(function () {
        $(this).toggleClass('hover-effect');
        $(".tel-win").slideToggle();

    });
    $('.list ul>li').hover(function () {
        if($(this).attr('class')=='active')return false;
        console.log('---',$(this).children().eq(1));
        $(this).children().eq(1).slideToggle();


    });

    $('.language').click(function () {
        $(this).toggleClass('hover-effect-leng');
        $(".head-menu").slideToggle();

    });
    $('.fil').click(function () {
        $(".list").toggleClass('list-open');


    });
    $('.crest').click(function () {
        $('.popup-images').removeClass('pop-n');

    });
    $('[data-photo="khata"]').click(function () {
        $(".sahara").addClass('pop-n');
    });
    $('[data-photo="sahara"]').click(function () {
        $(".khata").addClass('pop-n');
    });
///////////////////
    // text rotator
    textRotator = function(element) {
        var words = $(element),
            total = words.length - 1,
            position = 0,
            current = null,
            timer = null;
        $(element).first().addClass('active');
        var autoSlide = function() {
            words.removeClass('active');
            if (position === total) {
                position = 0;
            } else {
                position = position + 1;
            }
            //console.log(position);
            words.eq(position).addClass('active');
        };
        timer = setInterval(autoSlide, 4000);
    };
    $(document).ready(function() {
        textRotator('.change-text span');
    });
// // ZOOM
//     $('.ex1').zoom();
//
// // STYLE GRAB
//     $('.ex2').zoom({ on:'grab' });
//
// // STYLE CLICK
//     $('.ex3').zoom({ on:'click' });
//
// // STYLE TOGGLE
//     $('.ex4').zoom({ on:'toggle' });
});