$(".vierkant").click(function() { // een click-event voor .vierkant
    $(this).hide(); // het vierkant waarop werd geklikt, wordt verborgen
});
$("#showAll").click(function() { // een click-event voor #showAll
    $(".vierkant").show(); // alle element met .vierkant worden zichtbaar
});
