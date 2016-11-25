$(document).ready(function() {

$('#about').hide();
$('#aboutmenu').fancybox({'padding':30});
$('#scholarship').hide();
$('#scholarshipmenu').fancybox({'padding':30});
$('#submitmenu').fancybox({'padding':30});
$('#subscription').hide();


function handlerleftnews( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"8350px"});
	 $('#footer').css({"padding-left":"30%"});
	 //setTimeout(function(){window.location.hash=url.substr();},50);
     //window.location.hash=url.substr(9,3);
     return false;
}

function handlerleftreport( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"4000px"});
	 $('#footer').css({"padding-left":"30%"});
	 //setTimeout(function(){window.location.hash=url.substr();},50);
     //window.location.hash=url.substr(9,3);
   return false;
}

function handlerleftcompete( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"2000px"});
	 $('#footer').css({"padding-left":"30%"});
	 //setTimeout(function(){window.location.hash=url.substr();},50);
     //window.location.hash=url.substr(9,3);
   return false;
}

function handlerleftjob( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"7250px"});
	 $('#footer').css({"padding-left":"30%"});
	 //setTimeout(function(){window.location.hash=url.substr();},50);
     //window.location.hash=url.substr(9,3);
   return false;
}

function handlerleftactivity( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"200px"});
	 $('#footer').css({"padding-left":"30%"});
	 //setTimeout(function(){window.location.hash=url.substr();},50);
     //window.location.hash=url.substr(9,3);
   return false;
}

  
function handler( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"8350px"});
	 $('#footer').css({"padding-left":"30%"});
	 setTimeout(function(){window.location.hash=url.substr(9,3);},500);
     //window.location.hash=url.substr(9,3);
   return false;
}


function handlerj( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"7250px"});
	 $('#footer').css({"padding-left":"30%"});
	 setTimeout(function(){window.location.hash=url.substr(7,3);},500);
     //window.location.hash=url.substr(9,3);
   return false;
}

function handlerr( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"4000px"});
	 $('#footer').css({"padding-left":"30%"});
	 setTimeout(function(){window.location.hash=url.substr(7,3);},500);
     //window.location.hash=url.substr(9,3);
   return false;
}

function handlera( event ) {
     //location.href = 'index.html';
     var url=$(this).attr('href');
     $('#right').load(href);
	 $('#right').css({"height":"200px"});
	 $('#footer').css({"padding-left":"30%"});
	 setTimeout(function(){window.location.hash=url.substr(7,3);},500);
     //window.location.hash=url.substr(9,3);
   return false;
}

	
	
$("#right .topmenu_news_content a").bind( "click", handler );
$("#right #readmore").bind( "click", handler );
$("#right #topmenu_2 a" ).bind( "click", handlerj );
$("#right #topmenu_1 a" ).bind( "click", handlerr );
$("#right #topmenu2 #readmore a").bind( "click", handlera );


$("#left #new a" ).bind( "click", handlerleftnews );
$("#left #j1 a" ).bind( "click", handlerleftjob );
$("#left #r1 a" ).bind( "click", handlerleftreport );
$("#left #c1 a" ).bind( "click", handlerleftcompete );
$("#left #activity a" ).bind( "click", handlerleftactivity );


$('.topmenu_news_content a').hover(function(evt) {
		//don't follow link
	   evt.preventDefault();
		 //get path to new image
	   var imgPath = $(this).attr('id');
		 //get reference to old image
		var oldImage = $('#newspost img');
			 //create HTML for new image
		var newImage = $('<img src="p/' + imgPath +'.jpg" width="330px" height="453px" style="margin:10px">');
			 //make new image invisible
			 newImage.hide();
			 //add to the #photo div
			 $('#newspost').prepend(newImage);
			 //fade in new image
			 newImage.show();
			 //fade out old image and remove from DOM
			 oldImage.hide();
	}); // hover


$('.topmenu_job_content a').hover(function(evt) {
		//don't follow link
	   evt.preventDefault();
		 //get path to new image
	   var imgPath = $(this).attr('id');
		 //get reference to old image
		 var oldImage = $('#ewspost_2 img');
		 			
			 //create HTML for new image
			 var newImage = $('<img src="p/' + imgPath +'.jpg" width="330px" height="453px" style="margin:10px">');
			 //make new image invisible
			 newImage.hide();
			 //add to the #photo div
			 $('#ewspost_2').prepend(newImage);
			 //fade in new image
			 newImage.show();
			 //fade out old image and remove from DOM
			 oldImage.hide();
	}); // hover	

$("#slide").hide();

window.onhashchange = function(){
        
        if(location.hash)
		{
        }
		else
        {
		document.location.reload("index.php");     
        }
}


 $('#submit').validate({
   
   rules: {
     email: {
        required: true,
        email: true
     },
     
     confirm_password: {equalTo:'#password'},
     spam: "required"
   }, //end rules
   messages: {
      email: {
         required: "請輸入email，不可留白",
         email: "這不是有效的email"
       },

   },
   errorPlacement: function(error, element) { 
       if ( element.is(":radio") || element.is(":checkbox")) {
          error.appendTo( element.parent()); 
        } else {
          error.insertAfter(element);
        } 
    } 

  }); // end validate 
  





});//end ready
