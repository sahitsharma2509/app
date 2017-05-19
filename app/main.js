 $(document).ready(function()
	 {
	   
	    $('.pie_progress--slow').asPieProgress({
        namespace: 'pie_progress',
        goal: 1000,
        min: 0,
        max: 1000,
        speed: 20,
        easing: 'linear'
      });
      // Example with grater loading time - loads longer

   $('.pie_progress').asPieProgress('go', '45%');
	 
	 
	 
	 $("#notice").click(function()
   {
   $(".tab-1").removeClass("hide");
   $(".tab-2").addClass("hide");
   $(".tab-3").addClass("hide");
   $(".tab-4").addClass("hide");
    $("#attendance").removeClass("active");
	  $("#internal").removeClass("active");
	  $("#notice").addClass("active");
	  $("#chat").removeClass("active");
   });
     $("#attendance").click(function()
   {
   $(".tab-2").removeClass("hide");
   $(".tab-1").addClass("hide");
   $(".tab-3").addClass("hide");
    $(".tab-4").addClass("hide");
   $("#notice").removeClass("active");
   $("#internal").removeClass("active");
   $("#attendance").addClass("active");
    $("#chat").removeClass("active");
   });
     $("#internal").click(function()
   {
   $(".tab-3").removeClass("hide");
   $(".tab-2").addClass("hide");
   $(".tab-1").addClass("hide");
    $(".tab-4").addClass("hide");
   $("#notice").removeClass("active");
   $("#internal").addClass("active");
   $("#attendance").removeClass("active");
    $("#chat").removeClass("active");
   });
     $("#chat").click(function()
   {
   $(".tab-4").removeClass("hide");
   $(".tab-2").addClass("hide");
   $(".tab-1").addClass("hide");
    $(".tab-3").addClass("hide");
   $("#notice").removeClass("active");
   $("#internal").removeClass("active");
   $("#attendance").removeClass("active");
    $("#chat").addClass("active");
   });
  $(".button-collapse").sideNav();
  
	 
	 });