jQuery(document).ready(function(){
	if($("#form-rolar-baixo").length > 0) {
		$(window).scroll(function() {
			var altura = $('#form-rolar-baixo').height();
		    if($(window).scrollTop() >= altura) {
		        $('#cta-cadastrarMeuCaso').addClass('d-none');
		    }
		    if($(window).scrollTop() < altura) {
		        $('#cta-cadastrarMeuCaso').css("display", "fixed");
		    }
		});
	}

	$('#cta-p-servico-1').click(function(event) {
		if($( "#p-servico-1" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#p-servico-1').removeClass('d-none');
			$('.p-menos-1').text('-');
		} else {
			$('#p-servico-1').addClass('d-none');
			$('.p-menos-1').text('+');
		}
		
	});
	$('#cta-p-servico-2').click(function(event) {
		if($( "#p-servico-2" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#p-servico-2').removeClass('d-none');
			$('.p-menos-2').text('-');
		} else {
			$('#p-servico-2').addClass('d-none');
			$('.p-menos-2').text('+');
		}
	});
	$('#cta-p-servico-3').click(function(event) {
		if($( "#p-servico-3" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#p-servico-3').removeClass('d-none');
			$('.p-menos-3').text('-');
		} else {
			$('#p-servico-3').addClass('d-none');
			$('.p-menos-3').text('+');
		}
	});
	$('#cta-p-servico-4').click(function(event) {
		if($( "#p-servico-4" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#p-servico-4').removeClass('d-none');
			$('.p-menos-4').text('-');
		} else {
			$('#p-servico-4').addClass('d-none');
			$('.p-menos-4').text('+');
		}
	});
	$('#cta-p-servico-5').click(function(event) {
		if($( "#p-servico-5" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#p-servico-5').removeClass('d-none');
			$('.p-menos-5').text('-');
		} else {
			$('#p-servico-5').addClass('d-none');
			$('.p-menos-5').text('+');
		}
	});

	$('#cta-servico-1').click(function(event) {
		if($( "#servico-1" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#servico-1').removeClass('d-none');
			$('.menos-1').text('-');
		} else {
			$('#servico-1').addClass('d-none');
			$('.menos-1').text('+');
		}
	});
	$('#cta-servico-2').click(function(event) {
		if($( "#servico-2" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#servico-2').removeClass('d-none');
			$('.menos-2').text('-');
		} else {
			$('#servico-2').addClass('d-none');
			$('.menos-2').text('+');
		}
	});

	$('#cta-servico-3').click(function(event) {
		if($( "#servico-3" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#servico-3').removeClass('d-none');
			$('.menos-3').text('-');
		} else {
			$('#servico-3').addClass('d-none');
			$('.menos-3').text('+');
		}
	});
	$('#cta-servico-4').click(function(event) {
		if($( "#servico-4" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#servico-4').removeClass('d-none');
			$('.menos-4').text('-');
		} else {
			$('#servico-4').addClass('d-none');
			$('.menos-4').text('+');
		}
	});
	$('#cta-servico-5').click(function(event) {
		if($( "#servico-5" ).hasClass( "d-none" )){
			$('.d-n-t').addClass('d-none');
			$('#servico-5').removeClass('d-none');
			$('.menos-5').text('-');
		} else {
			$('#servico-5').addClass('d-none');
			$('.menos-5').text('+');
		}
	});
});

