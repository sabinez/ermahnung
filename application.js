$(document).ready(function(){

	var clickBtn = function (){
		alert('To Do');
	}
	
	$('.btn-success').on('click', clickBtn);


	var paid = function(){
		var row = $(this).parents('tr');

		row.fadeOut(200);
	}

	$("#noch-offen input[type='checkbox']").on('click', paid);


})