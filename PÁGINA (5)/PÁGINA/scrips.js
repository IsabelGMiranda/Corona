jQuery('document').ready(function($){

var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');

/*click en el menu*/
    menuBtn.click(function() {

    	if( menu.hasClass('show')){
    		menu.removeClass('show')
    	}else{ 
    	menu.addClass('show');
    }
    });

});
