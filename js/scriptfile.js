// JavaScript Document
$(document).ready(function() 
{
	$("#java").hide();
	//NAVIGATION BAR
	var old;
	var left;
	$(".info").hide();
	$('.main').each(function() 
	{
        if($(this).data("core") == "1")
		{
			$(this).show();
			old = $(this);
			left = old.css("margin-left");
		} else {
			$(this)
				.hide()
				.animate({marginLeft: "100%"});
				
		};
    });
	$('.toolbar').on('click',function()
	{
		//TOOLBAR CHANGES
		//Remove 
		$('.toolbar').each(function()
		{
			$(this)
				.attr("data-clicked","0")
				.data("clicked","0")
				.css({
					'margin-top':'20px',
					"font-weight":"normal",
					"color":"white",
					'border-width':'2px'
					});	
		});
		var clicky =$(this);
		clicky
			.attr("data-clicked","1")
			.data("clicked","1")
			.css({
				'margin-top':'17px',
				"font-weight":"bold",
				"color":"#00B2FF",
				'border-width':'5px'
				});
		//TOOLBAR CHANGES
		
		
		console.log($(this).data("clicked"));
		var slides;
		
		//Find matching Main Div with toolbar
		$('.main').each(function(index, element) 
		{
			var current = $(this);
            if(current.data("core") == clicky.data("core")) 
			{
				slides = current;
			}	
        }); //<--end Each loops
		
		//Check Direction
		if(parseInt(old.data("core")) > parseInt(slides.data("core")))      //New slide is left
		{
			slides.css("margin-left","-100%");
			old.animate({marginLeft: "100%"},350,function()
			{
				$(this).hide();
				slides.show();
				slides.animate({marginLeft: (slides.parent().width()/2 - slides.width()/2) }, 400,function()
				{
					slides.css("margin","auto");
				});
			});
		} else if(parseInt(old.data("core")) < parseInt(slides.data("core")))
		{
			slides.css("margin-left","100%");
			old.animate({marginLeft: "-100%"},350,function()
			{
				$(this).hide();
				slides.show();
				slides.animate({marginLeft: slides.parent().width()/2 - slides.width()/2 }, 400,function()
				{
					slides.css("margin","auto");
				});
			});
		};
		old = slides;
	});	//<-- End clicked function
	
	
	
	$('.toolbar').hover(
	function(){
		$(this)
			.css('margin-top','17px')
			.css('border-width','5px');
		console.log($(this).data("clicked"));
	},
	function(){
		if($(this).data("clicked") < 1){
			$(this)
				.css('margin-top','20px')
				.css('border-width','2px');
		};
	});
	//NAVIGATION BAR
	
	
	
	
	//PROJECTS
	var closed = 0;
	$("#Projects img").click(function(){
		var clicked = $(this);
		if(clicked.data("clicked") == "1")
		{
			clicked.data("clicked","0");
		} else
		{
			clicked.data("clicked","1");
		}
		
		//If top images clicked just toggle all images(except one clicked) - still smooth
		if(parseInt(clicked.data("core")) < 4)
		{
			if(closed == 0)
			{
				//CLOSED
				$("#bottomSlide").slideToggle(500);
				$("#topSlide img").each(function() 
				{
					if( $(this).data("core") !== clicked.data("core"))
					{
						$(this).slideToggle(500);
					};
				});//<-- END Each loop
				
				switch(parseInt(clicked.data("core")))
				{
					case 1:
						$("#arduinoWords").delay(400).slideToggle(500);
						break;
					case 2:
						$("#roverWords").delay(400).slideToggle(500);
						break;
					case 3:
						$("#androidWords").delay(400).slideToggle(500);
						break;
				};
				closed = 1;
			} else 
			{
				$(".info").each(function()
				{
                    $(this).slideUp(300);
                });
				$("#bottomSlide").delay(300).slideToggle(500);
				$("#topSlide img").each(function() 
				{
					if( $(this).data("core") !== clicked.data("core"))
					{
						$(this).delay(300).slideToggle(500);
					};
				});
				closed = 0;
			}
			
			//OPENED
			
		} else //If bottom image clicked
		{	
			if(closed == 0)
			{
				//CLOSED
				$("#topSlide").slideToggle(500);
				$("#bottomSlide img").each(function() 
				{
					if( $(this).data("core") !== clicked.data("core"))
					{
						$(this).slideToggle(500);
					};
				});//<-- END Each loop
				
				switch(parseInt(clicked.data("core")))
				{
					case 4:
						$("#orbitWords").delay(400).slideToggle(500);
						break;
					case 5:
						$("#photoWords").delay(400).slideToggle(500);
						break;
					case 6:
						$("#guiWords").delay(400).slideToggle(500);
						break;
				};
				closed = 1;
			} else 
			{
				$(".info").each(function()
				{
                    $(this).slideUp(300);
                });
				$("#topSlide").delay(300).slideToggle(500);
				$("#bottomSlide img").each(function() 
				{
					if( $(this).data("core") !== clicked.data("core"))
					{
						$(this).delay(300).slideToggle(500);
					};
				});
				closed = 0;
			}
		}; //<-- END If Else
		
	});//<-- END Projects clicked
	//PROJECTS
	
	
	
	
	//Internal Links
	$("span").click(function()
	{
		
		var clickedSpan = $(this);
		$('.toolbar[data-core="3"]').trigger("click");
		$("#Projects img").each(function() 
		{
			if($(this).data("clicked") == "1")
			{
				$(this).trigger("click");
			};
		});
		
		$("#Projects img").each(function() 
		{
			var image =$(this);
			if( image.data("core") == clickedSpan.data("core"))
			{
				setTimeout(function () 
				{
   					image.trigger('click');
				}, 800);
				
			};
		});

	});
	
});