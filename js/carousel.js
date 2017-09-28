$(function(){
    var i = 0;
    var Timer;

    //轮播开始前先复制第一张到最后，并给'.carousel-wrap'设置宽度，使'.carousel-slide'能够并排排列
    $(".carousel-wrap").append($(".carousel-slide").first().clone()).width($('.carousel-slide').width() * $('.carousel-slide').length);


    //轮播方法
    function carousel(){
        var w = $('.carousel-slide').width();

        //翻到最后一张且继续往后翻的时候
        if (i == $('.carousel-slide').length) {
            i = 1;
            $('.carousel-wrap').css({left:0});
        }

        //翻到第一张且继续往前翻的时候
        if (i == -1) {
            i = $(".carousel-slide").length - 2;
            $('.carousel-wrap').css({left: -w * ($(".carousel-slide").length - 1)});
        }

        //轮播滚动--slide
        $('.carousel-wrap').stop().animate({left:-w * i});

        //焦点切换
        if (i == $(".carousel-focus span").length) {
            $($(".carousel-focus span")[0]).addClass('active').siblings().removeClass('active');
        }
        $($(".carousel-focus span")[i]).addClass('active').siblings().removeClass('active');
    };


    //前一张prev方法
    function prev(){
        i--;
        carousel(i);
    };

    //后一张next方法
    function next(){
        i++;
        carousel(i);
        console.log(i);
    };

    //前一张
    $(".carousel-prev").click(function(){
        prev();
    });
    //后一张
    $(".carousel-next").click(function(){
        next();
    });

    //生成对应数量的焦点
    for (var k = 0; k < $(".carousel-slide").length-1;k++) {
        if (k < $(".carousel-slide").length-1) {
            $("<span></span>").appendTo('.carousel-focus');
        }
        $(".carousel-focus span").eq(0).addClass('active');
    };
});
