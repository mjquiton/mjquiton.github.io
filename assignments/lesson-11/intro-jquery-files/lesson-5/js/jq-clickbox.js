$(function () {
    // All jQuery Code Goes Here

    /*$('.boxHolder').on('click', 'li', function(){
        $(this).addClass('greenBox');
    })
        $('.boxHolder').on('dblclick', 'li', function(){
        $(this).addClass('orangeBox');
    })*/
    $('.boxHolder').on({
        click: function (){
            // the click handler 
            $(this).addClass('greenBox').html($(this).index());
        },
        dblclick: function () {
            //the double-click handler
            $(this).addClass('orangeBox').html($(this).index());
        },
        mouseenter: function(){
            //when mouse pointer enters region of list item
            $(this).css('opacity', 0.3);
        },
        mouseleave: function (){
        //when mouse pointer leaves region of list item
        $(this).css('opacity', 1.0);
    }
    }, 'li')
})
