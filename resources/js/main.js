$(document).ready(function(){
  //Jquery draggable function
  var handle = $("#custom-handle");
  $("#slider").slider({
    value: 3000,
    min: 3000,
    max: 6000,
    step: 1000,
    //Part of the fonction to create a custom handle
    create: function() {
      handle.text("Kr");
    },
    //Part of the fonction that create the slider and modify the text in the html
    slide: function( e, ui ) {
        $(".formCTA input").val("Lån " + (ui.value/1000) + ".000 kr »");
      if (ui.value == 3000) {
        $(".bluebox h2").text("3.000 Kr");
        $(".bluebox p").text("Tilbagebetales efter 30 dage: 3.625 kr.");
        $(".textbox p").text("Et lån på kr. 3.000 i 30 dage har en etableringsomkostning på kr. 625 , en ÅOP på 899,86 % samt en fast debitorrente på 0%. Det betyder, at ydelsen og den samlede tilbagebetaling efter 30 dage på kr. 3.625.");
      } else if (ui.value == 4000) {
        $(".bluebox h2").text("4.000 Kr");
        $(".bluebox p").text("Tilbagebetales efter 30 dage: 4.820 kr.");
        $(".textbox p").text("Et lån på kr. 4.000 i 30 dage har en etableringsomkostning på kr. 820 , en ÅOP på 866,81 % samt en fast debitorrente på 0%. Det betyder, at ydelsen og den samlede tilbagebetaling efter 30 dage på kr. 4.820.");
      } else if (ui.value == 5000) {
        $(".bluebox h2").text("5.000 Kr");
        $(".bluebox p").text("Tilbagebetales efter 30 dage: 5.999 kr.");
        $(".textbox p").text("Et lån på kr. 5.000 i 30 dage har en etableringsomkostning på kr. 999 , en ÅOP på 817,26 % samt en fast debitorrente på 0%. Det betyder, at ydelsen og den samlede tilbagebetaling efter 30 dage på kr. 5.999.");
      } else if (ui.value == 6000) {
        $(".bluebox h2").text("6.000 Kr");
        $(".bluebox p").text("Tilbagebetales efter 30 dage: 7.130 kr.");
        $(".textbox p").text("Et lån på kr. 6.000 i 30 dage har en etableringsomkostning på kr. 1.130 , en ÅOP på 716,11 % samt en fast debitorrente på 0%. Det betyder, at ydelsen og den samlede tilbagebetaling efter 30 dage på kr. 7.130.");
      }
    }
  });







  //Tooltip function on top of the formulary
  $(".fa-question-circle").hover(function() {
    $(this).next(".popup").toggle();
  });







});;
