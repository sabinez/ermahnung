$(document).ready(function(){

	var clickBtn = function (){
		$('#noch-offen').prepend( "<tr><td>6.4.2015</td><td>ITB</td><td>410€</td><td><input type='checkbox'> bezahlt</td></tr>" );
		$('#noch-offen tr:nth-of-type(1)').hide();
		$('#noch-offen tr:nth-of-type(1)').fadeIn(200);
	}
	
	$('.btn-success').on('click', clickBtn);


	var paid = function(){
		var row = $(this).parents('tr');

		row.fadeOut(200);
	}

	$("#noch-offen input[type='checkbox']").on('click', paid);



	$('#input-datum').datepicker({
		format: "dd.mm.yyyy",
		language: "de",
		todayHighlight: true,
		daysOfWeekDisabled: "0,6",
	});

})