$( document ).ready(function() {

	var count=0;
	var maxVisible=6;
	var maxLength=($("#gallery-inner img").length)-maxVisible;
	var transition=false;
	
	
	$("#gallery-inner img").bind("click",function(){
		
		var thisSrc=($(this).attr("src"));
	
	
	if(thisSrc=="shots/9.jpg"){
			$("#main img").attr("src","shots/ugc.jpg");
	} else {
			$("#main img").attr("src",thisSrc);
	}
	
		
	
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
	
	});
	
	
	//document.title=count+"/"+maxLength;
	
	$("#up").css("display","none");
	
	$(".arrow").bind("click",function(){
	
		if(transition==false){
		
		transition=true;
	
		var thisID=($(this).attr("id"));
	
		var gotopx = parseInt($("#gallery-inner").css('marginTop'));
		
		var shift=parseInt($("#gallery-inner img").css('marginBottom'));
		shift+=$("#gallery-inner img").height();
	
	
		var totalheight = ($("#gallery-inner").height() - $("#gallery").height());
		//totalheight += $("#gallery img").height() * $("#gallery-inner img").length;
		totalheight += $("#gallery img").height();
		
		
		
	
		if(thisID=="up"){
			count--;
			
			if(count < 0){
				count=0;
				$("#up").css("display","none");
			} else {
				gotopx+=shift;
				
			}
			
			
		} else {
		
			count++;
			
			if(count < maxLength) {
				
				gotopx-=shift;
				
			} else {
				count=maxLength;
				$("#down").css("display","none");	
			}
		
			
		}
		
		
		
		if(count < maxLength && count > -1){
		
			
			 $("#gallery-inner").animate({
				'marginTop': gotopx
			  }, 500, function() {
			  

						$("#down").css("display","none");
						$("#up").css("display","none");
						
						
						if((count + 1) >= maxLength){
							$("#down").css("display","none");
						} else {
							$("#down").css("display","block");
						}
						
						
						
						if((count - 1) == -1){
							$("#up").css("display","none");
						} else {
							$("#up").css("display","block");
						}						
		
		
					transition=false;
			

			  });
		  
		  } 
		
		//document.title=count+"/"+maxLength;
	
		}
	
	});


});