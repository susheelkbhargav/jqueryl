//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user ineraction

$(".spoiler span").hide();
$(".spoiler").append("<button type=button> reveal spoilers</button>");
$(".spoiler button").click(
   function(){$(this).prev().show();
 $(this).remove();}
	);
