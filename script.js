$(".vierkant").click(function() { // een click-event voor .vierkant
    $(this).hide(); // het vierkant waarop werd geklikt, wordt verborgen
});
$("#showAll").click(function() { // een click-event voor #showAll
    $(".vierkant").show(); // alle element met .vierkant worden zichtbaar
});
$(".rechthoek").dblclick(function(){
	// in het geval dat we bedoelen: de rechthoek waar wordt opgeklikt
$(this).removeClass("w3-yellow w3-green").addClass("w3-purple")

       // in het geval dat we bedoelen: alle rechthoeken
	$(".rechthoek").removeClass("w3-yellow w3-green").addClass("w3-purple")
});
