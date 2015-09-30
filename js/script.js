$( document ).ready(function() {

	/********** WORKS **********/

	function show(id,dispType){
		document.getElementById(id).style.display = dispType;
	}

	function hide(id){
		document.getElementById(id).style.display = "none";
	}

	function changeTitle(title){
		document.title = title;
	}

	function thumbnailHover(id,isHover){
		if(isHover){ //document.getElementById(id).style.visibility = "visible"; 
			$( "#" + id ).css( "visibility", "visible" ).hide().fadeIn( "fast" );
		}
		else { 
			$( "#" + id ).css( "visibility", "hidden" );
		}
	}

	var dtThumb = document.getElementById("DT-thumb");
	var dtBack = document.getElementById("DT-back");
	var tyThumb = document.getElementById("TY-thumb");
	var tyBack = document.getElementById("TY-back");
	var mbThumb = document.getElementById("MB-thumb");
	var mbBack = document.getElementById("MB-back");
	var cardThumb = document.getElementById("card-thumb");
	var lichThumb = document.getElementById("lich-thumb");
	var bookGirlThumb = document.getElementById("book-girl-thumb");
	var scarfThumb = document.getElementById("scarf-thumb");


	dtThumb.onclick=function(){
		show("DT-details","block");
		show("DT-banner","block");
		hide("projects");
		changeTitle("Design Thinking Mobile App | Joanne Arboleda");
	};

	dtThumb.onmouseenter=function(){
		thumbnailHover("DT-overlay", true);
	};

	dtThumb.onmouseleave=function(){
		thumbnailHover("DT-overlay", false);
	};

	dtBack.onclick=function(){
		show("projects","block");
		hide("DT-banner");
		hide("DT-details");
		changeTitle("Works | Joanne Arboleda");
	};

	tyThumb.onclick=function(){
		show("TY-details","block");
		show("TY-banner","block");
		hide("projects");
		changeTitle("Business Travel Mobile App | Joanne Arboleda");
	};

	tyThumb.onmouseenter=function(){
		thumbnailHover("TY-overlay", true);
	};

	tyThumb.onmouseleave=function(){
		thumbnailHover("TY-overlay", false);
	};

	tyBack.onclick=function(){
		show("projects","block");
		hide("TY-banner");
		hide("TY-details");
		changeTitle("Works | Joanne Arboleda");
	};

	mbThumb.onclick=function(){
		show("MB-details","block");
		show("MB-banner","block");
		hide("projects");
		changeTitle("Food Delivery Webpage | Joanne Arboleda");
	};

	mbThumb.onmouseenter=function(){
		thumbnailHover("MB-overlay", true);
	};

	mbThumb.onmouseleave=function(){
		thumbnailHover("MB-overlay", false);
	};

	mbBack.onclick=function(){
		show("projects","block");
		hide("MB-banner");
		hide("MB-details");
		changeTitle("Works | Joanne Arboleda");
	};
	
	var isViewingImg = false;
	
	cardThumb.onmouseenter=function(){
		thumbnailHover("card-overlay", true);
	};

	cardThumb.onmouseleave=function(){
		thumbnailHover("card-overlay", false);
	};
	
	// Show Illustration 
	
	function showImg( img, descId ){
		if( !isViewingImg ){
			$( descId ).show();
			$( "#current-img" ).attr( "src", img )
			$( "#img-slider" ).show();
			$( "body" ).height( $( "body" ).height() + 475 );
			$( ".img-container" ).slideToggle( "slow" );
			$("html, body").animate({ scrollTop: $(document).height() }, "fast");
			
			isViewingImg = true;
		}
	}
	
	$( "#img-slider" ).click(function(){
		$( this ).hide();
		$( ".img-desc" ).hide();
		$( "body" ).height( $( "body" ).height() - 475 );
		$( ".img-container" ).slideToggle( "slow" );
		isViewingImg = false;
	});
	
	cardThumb.onclick=function(){
		//$( "#img-viewer" ).fadeIn( "fast" );
		showImg( "../images/illustrations/card.png", "#card-desc" );
	};
	
	/*$( "#img-viewer" ).click(function(){
		$( this ).fadeOut( "fast" );
	});*/
	
	lichThumb.onmouseenter=function(){
		thumbnailHover("lich-overlay", true);
	};

	lichThumb.onmouseleave=function(){
		thumbnailHover("lich-overlay", false);
	};
	
	// Show Illustration 
	lichThumb.onclick=function(){
		//$( "#current-img" ).attr( "src", "../images/illustrations/lich.png" )
		//$( "#img-viewer" ).fadeIn( "fast" );
		showImg( "../images/illustrations/lich.png", "#lich-desc" );
	};
	
	bookGirlThumb.onmouseenter=function(){
		thumbnailHover("book-girl-overlay", true);
	};

	bookGirlThumb.onmouseleave=function(){
		thumbnailHover("book-girl-overlay", false);
	};
	
	// Show Illustration 
	bookGirlThumb.onclick=function(){
		//$( "#current-img" ).attr( "src", "../images/illustrations/book-girl.png" )
		//$( "#img-viewer" ).fadeIn( "fast" );
		showImg( "../images/illustrations/book-girl.png", "#book-girl-desc" );
	};
	
	scarfThumb.onmouseenter=function(){
		thumbnailHover("scarf-overlay", true);
	};

	scarfThumb.onmouseleave=function(){
		thumbnailHover("scarf-overlay", false);
	};
	
	// Show Illustration 
	scarfThumb.onclick=function(){
		//$( "#current-img" ).attr( "src", "../images/illustrations/scarf.png" )
		//$( "#img-viewer" ).fadeIn( "fast" );
		showImg( "../images/illustrations/scarf-copy.png", "#scarf-desc" );
	};
});