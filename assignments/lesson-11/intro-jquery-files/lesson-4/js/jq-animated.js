$(document).ready(function () {
    $('.navigation > li').hover(function(){
        //this code executes when pointer is over the element
        $(this).addClass('openSesame');
        
    }, function(){
        //this code excutes when pointer leaves element
        $(this).removeClass('openSesame');
    })
    
    })