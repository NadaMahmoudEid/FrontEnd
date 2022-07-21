
$(document).ready(function () {
    $("#log").animate(
        {
            top: '15%'
        }, 1500
    );
    $("#log").animate(
        {
      width:'40%',
      left:'23%',
      borderRadius: '31px'
        }, 1500
    );
    $("#log").animate(
        {
            height: '50%'
            
        }, 1500
    ,function(){
        $("h1").fadeIn(2000)
        
        $("h4").fadeIn(3000)

        $(".in").slideDown(4000);
        $(".in2").slideDown(4000);
      $("#blog").fadeIn(5000);
      $("#check").fadeIn(5400);
      $(".container").fadeIn(5400);
    });
  

});