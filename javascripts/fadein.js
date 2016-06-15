var main = function()
{
	$(".letterspaced").fadeIn(1000);
    
	setTimeout( fadeInDesigner, 500);
	setTimeout( fadeInResume, 1500);
};

var fadeInDesigner = function()
{
	$(".letterspacedharder").fadeIn(1000);
};

var fadeInResume = function()
{
	$(".resume").fadeIn(2000);
};

    
$(document).ready(main);