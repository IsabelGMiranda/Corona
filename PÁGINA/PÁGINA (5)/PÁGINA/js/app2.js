window.addEventListener('load', function(){
	/*SE CREA UNA NUEVAINSTANCEA aqui se pasan elementos para el carrusel (elementos de todos los div)*/
	new Glider(document.querySelector('.carousel__lista2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores2',
		arrows: {
			prev: '.carousel__anterior2',
			next: '.carousel__siguiente2'
		},
		responsive: [
			{
			  // dispositivos mayores a 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // sdispositivos mayores a 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});