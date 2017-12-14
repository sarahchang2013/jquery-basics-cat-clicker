$('#name1').html("Lucy");
$('#name2').html("Tony");
$('#cat1').click(function() {
  				var num = parseInt($.trim($('#number1').html()));
				$('#number1').html(++num)
			});
$('#cat2').click(function() {
  				var num = parseInt($.trim($('#number2').html()));
				$('#number2').html(++num)
			});