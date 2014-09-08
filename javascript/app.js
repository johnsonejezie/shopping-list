// when you click on add button it will store the input value into

$(document).ready(function() {

	$("#userInput").submit(function (event) {

		$('#userInput').validate();

		event.preventDefault();

		if ($.trim($('#item').val()).length < 3){
			alert('Invalid Input! This field must be filled')
			// $('.warning').html("Invalid Input");
		}
		else{

		var goods = $('#item').val();


	   	$("#data").append("<tr>"+"<td>"+'<input type="checkbox" value="1" id="checkbox">'+
	   		"</td>"+"<td>"+goods+ "</td>"+ "<td>"+'<button>Remove</button>'+"</td>" + "</tr>");
   	}
  	 		userInput.reset();
	});



	$(".tableList").on("change", "input[type=checkbox]", function(){
			if ($(this).is(':checked')){
				$(this).parent().parent().appendTo(".purchased");
			}
			else{
				$(this).parent().parent().appendTo(".cart");
			}
	});

	$(".tableList").on("click", "button", function(){
				
			var item = $(this).parent().next().text();
				$("#item").val(item);

			$(this).parent().parent().remove();

	});

});