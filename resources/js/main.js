$(document).ready(function(){
  //Jquery draggable fucntion
  $("#krd").draggable({
    grid: [ 190, 0 ],
    cursor: "move",
    containment: '.selector',
    drag: function( event, ui ) {
      if(ui.position.left = 190) {
        $(".bluebox h2").text("3.000 Kr");
      } 
    }
  });


  //Tooltip function on top of the formulary
  $(".fa-question-circle").hover(function() {
    $(this).next(".popup").toggle();
  });







});;
