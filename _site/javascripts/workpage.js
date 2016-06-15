var main = function()
{
	$('.centered').mouseover(function()	{
		$(this).animate({width: '+=20%', height: '+=20%', opacity: 0.8}, 200);
	});
	$('.centered').mouseout(function()	{
		$(this).animate({width: '-=20%', height: '-=20%', opacity: 1}, 200);
	});
};



    
$(document).ready(main);