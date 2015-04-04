$(document).ready(function(){

	$('#geschlossen').hide();

	var fadeInListe = function (e){
		e.preventDefault();
		$('#geschlossen').slideToggle();
	}

	$('.liste-geschlossen').on('click', fadeInListe);

	var clickBtn = function (){
		var valueAgentur = $('#input-agentur').val();
		var valueBetrag = $('#input-betrag').val();
		var valueDatum = $('#input-datum').val();

		$('#noch-offen').prepend( '<tr><td>' + valueDatum + '</td><td>' + valueAgentur + '</td><td>' + valueBetrag + '€' + "</td><td class='bezahlt'><input type='checkbox'> bezahlt</td></tr>" );
		$('#noch-offen tr:nth-of-type(1)').hide();
		$('#noch-offen tr:nth-of-type(1)').fadeIn(200);

		var valueAgentur = $('#input-agentur').val('');	
		var valueBetrag = $('#input-betrag').val('');
		var valueDatum = $('#input-datum').val('');	
	}
	
	$('.btn-success').on('click', clickBtn);


	var paid = function(){
		var row = $(this).parents('tr');

		row.fadeOut(200, function() {

			$(row).appendTo( "#geschlossen" );

			$(row).find('.bezahlt').remove();

			row.fadeIn(200);
		});
	}

	$("#noch-offen").on('click', "input[type='checkbox']", paid);



	$('#input-datum').datepicker({
		format: "dd.mm.yyyy",
		language: "de",
		todayHighlight: true,
		daysOfWeekDisabled: "0,6",
	});

})