(function(){
    $.fn.color = function (options) {
        var defaults = {color: 'blue', size: '30px'};
        return $(this).each(function() {
            $(this).css({'color': options.color});
            $(this).css({'font-size': options.size});
        });
    };
})(jQuery);
