$(document).foundation();

$(document).ready(function(){
    $('.slick').slick({arrows:true});
    $('#mainMenu ul li a').click(function(){
        if($('#mainMenuResponsive').is(":visible")){
            $('#mainMenu').hide();
        }
    });
});