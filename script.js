$(document).ready(function(panelNumber){

    function accordion(panelNumber){
        var rotateDegrees = 0;
        $(`#panel-accordion${panelNumber}`).toggle();
        $(`#accordion${panelNumber} h3`).on( "click", function(){
           $(`#panel-accordion${panelNumber}`).toggle();
           rotateDegrees += 180;
           $(`#accordion${panelNumber} img`).css("transform",
           "rotate(" + rotateDegrees + "deg)");
           $(`#accordion${panelNumber} h3`).toggleClass("open")
        });
    }

   accordion(1);
   accordion(2);
   accordion(3);
   accordion(4);
   accordion(5);
});
    
