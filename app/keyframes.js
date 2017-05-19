$(window).load(function(){
			
			
    // Adding a new animation sequences (keyframe)
   $.fn.addKeyframe([{
	   name:"fill",
	   "0%":"width:0px; background-color:black",
	   "100%":"width:68%; background-color:orange; height:20px"}]);
			   
	 $('.sub-anim').playKeyframe({
	    name:'fill',
	    timingFunction: 'ease',
		duration:250,
		delay:2000,
	                             });
					 
			
		                 });