$(document).ready(function(){

	var clickBtn = function (){
		var valueAgentur = $('#input-agentur').val();
		var valueBetrag = $('#input-betrag').val();
		var valueDatum = $('#input-datum').val();

		$('#noch-offen').prepend( '<tr><td>' + valueDatum + '</td><td>' + valueAgentur + '</td><td>' + valueBetrag + '€' + "</td><td><input type='checkbox'> bezahlt</td></tr>" );
		$('#noch-offen tr:nth-of-type(1)').hide();
		$('#noch-offen tr:nth-of-type(1)').fadeIn(200);

		var valueAgentur = $('#input-agentur').val('');	
		var valueBetrag = $('#input-betrag').val('');
		var valueDatum = $('#input-datum').val('');	
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