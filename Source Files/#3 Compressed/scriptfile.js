$(document).ready(function(){$("#java").hide();var e;var t;$(".info").hide();$(".main").each(function(){if($(this).data("core")=="1"){$(this).show();e=$(this);t=e.css("margin-left")}else{$(this).hide().animate({marginLeft:"100%"})}});$(".toolbar").on("click",function(){$(".toolbar").each(function(){$(this).attr("data-clicked","0").data("clicked","0").css({"margin-top":"20px","font-weight":"normal",color:"white","border-width":"2px"})});var t=$(this);t.attr("data-clicked","1").data("clicked","1").css({"margin-top":"17px","font-weight":"bold",color:"#00B2FF","border-width":"5px"});console.log($(this).data("clicked"));var n;$(".main").each(function(e,r){var i=$(this);if(i.data("core")==t.data("core")){n=i}});if(parseInt(e.data("core"))>parseInt(n.data("core"))){n.css("margin-left","-100%");e.animate({marginLeft:"100%"},350,function(){$(this).hide();n.show();n.animate({marginLeft:n.parent().width()/2-n.width()/2},400,function(){n.css("margin","auto")})})}else if(parseInt(e.data("core"))<parseInt(n.data("core"))){n.css("margin-left","100%");e.animate({marginLeft:"-100%"},350,function(){$(this).hide();n.show();n.animate({marginLeft:n.parent().width()/2-n.width()/2},400,function(){n.css("margin","auto")})})}e=n});$(".toolbar").hover(function(){$(this).css("margin-top","17px").css("border-width","5px");console.log($(this).data("clicked"))},function(){if($(this).data("clicked")<1){$(this).css("margin-top","20px").css("border-width","2px")}});var n=0;$("#Projects img").click(function(){var e=$(this);if(e.data("clicked")=="1"){e.data("clicked","0")}else{e.data("clicked","1")}if(parseInt(e.data("core"))<4){if(n==0){$("#bottomSlide").slideToggle(500);$("#topSlide img").each(function(){if($(this).data("core")!==e.data("core")){$(this).slideToggle(500)}});switch(parseInt(e.data("core"))){case 1:$("#arduinoWords").delay(400).slideToggle(500);break;case 2:$("#roverWords").delay(400).slideToggle(500);break;case 3:$("#androidWords").delay(400).slideToggle(500);break}n=1}else{$(".info").each(function(){$(this).slideUp(300)});$("#bottomSlide").delay(300).slideToggle(500);$("#topSlide img").each(function(){if($(this).data("core")!==e.data("core")){$(this).delay(300).slideToggle(500)}});n=0}}else{if(n==0){$("#topSlide").slideToggle(500);$("#bottomSlide img").each(function(){if($(this).data("core")!==e.data("core")){$(this).slideToggle(500)}});switch(parseInt(e.data("core"))){case 4:$("#orbitWords").delay(400).slideToggle(500);break;case 5:$("#photoWords").delay(400).slideToggle(500);break;case 6:$("#guiWords").delay(400).slideToggle(500);break}n=1}else{$(".info").each(function(){$(this).slideUp(300)});$("#topSlide").delay(300).slideToggle(500);$("#bottomSlide img").each(function(){if($(this).data("core")!==e.data("core")){$(this).delay(300).slideToggle(500)}});n=0}}});$("span").click(function(){var e=$(this);$('.toolbar[data-core="3"]').trigger("click");$("#Projects img").each(function(){if($(this).data("clicked")=="1"){$(this).trigger("click")}});$("#Projects img").each(function(){var t=$(this);if(t.data("core")==e.data("core")){setTimeout(function(){t.trigger("click")},800)}})})})