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
		if( isHover ){ //document.getElementById(id).style.visibility = "visible"; 
			$( "#" + id ).css( "visibility", "visible" ).hide().fadeIn( "fast" );
		}
		else { 
			$( "#" + id ).css( "visibility", "hidden" );
		}
	}
	
	var galleryPic = function( title, idName ){
		return {
			title: this.title,
			idName: this.idName,
			getTitle: function(){
				return title;
			},
			
			getIdName: function(){
				return idName;
			},
			
			getSrc: function(){
				return "../images/illustrations/" + this.getIdName() + ".png";
			}, // get image URL
			
			preload: function(){
				var img = new Image();
				img.src = this.getSrc();
			}, // preload image
			
			hoverToggle: function(){
				var id = this.getIdName();
				
				$( "#" + id + "-thumb" )
					.mouseenter(function(){ 
						$( "#" + id + "-overlay" ).css( "visibility", "visible" ).hide().fadeIn( "fast" );
					})
					.mouseleave(function(){
						$( "#" + id + "-overlay" ).css( "visibility", "hidden" );
					});
			}, // hovering over thumbnails
			
			display: function(){
				var id = this.getIdName();
				var src = this.getSrc();
				
				$( "#" + id + "-overlay" ).css( "visibility", "visible" );
				$( "#" + id + "-desc" ).show();
				$( "#current-img" ).attr( "src", src );
			}, // display image in viewer
			
			hide: function(){
				$( ".img-desc" ).hide();
			}, // hide image
			
			showViewer: function(){
				var obj = this;
				var id = this.getIdName();
				
				//console.log( "i was called" );
				
				$( "#" + id + "-thumb" ).unbind( "click" ).click(function(){
					obj.hide();
					obj.display();
					$( "#bg-overlay" ).show();
					$( "body" ).height( $( "body" ).height() + 475 );
					$( ".img-container" ).slideToggle( "slow" );
					$( "html, body" ).animate({ scrollTop: $(document).height() }, "fast");
				});
				
				$( "#bg-overlay" ).unbind( "click" ).click(function(){
						$( this ).hide();
						$( "body" ).height( $( "body" ).height() - 475 );
						$( ".img-container" ).slideToggle( "slow" );
					});
			}
		}
	};
	
	var gallery = function( ){
		return{
			imgList: [],
			isViewing: false,
			getList: function(){
				return this.imgList;
			},
			addImg: function( pic ){
				var list = this.getList();
				list.push( pic );
			},
		}
	};	
	
	// Initializing new gallery
	imgGallery = new gallery();
	
	// Initializing gallery images
	imgGallery.addImg( galleryPic( "<em>Legend of Zelda</em>-Inspired Card", "card" ) ); // Zelda card, 0
	imgGallery.addImg( galleryPic( "<em>Adventure Time</em> Lich Poster", "lich" ) ); // Lich poster, 1
	imgGallery.addImg( galleryPic( "Scarf Girl Illustration", "scarf" ) ); // Scarf girl illustration, 2
	imgGallery.addImg( galleryPic( "Bookish Girl Illustration", "book-girl" ) ); // Bookish girl illustration, 3
	
	for( var i = 0; i < imgGallery.getList().length; i++ ){
		imgGallery.getList()[i].preload();
		imgGallery.getList()[i].hoverToggle();
		imgGallery.getList()[i].showViewer();
	}
	
	var dtThumb = document.getElementById("DT-thumb");
	var dtBack = document.getElementById("DT-back");
	var tyThumb = document.getElementById("TY-thumb");
	var tyBack = document.getElementById("TY-back");
	var mbThumb = document.getElementById("MB-thumb");
	var mbBack = document.getElementById("MB-back");
	

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
	
	// Show Illustration 
	
	/*var isViewingImg = false;
	
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
		$( ".thumb-overlay" ).css( "visibility", "hidden" );
		$( ".img-desc" ).hide();
		$( "body" ).height( $( "body" ).height() - 475 );
		$( ".img-container" ).slideToggle( "slow" );
		isViewingImg = false;
	});
	
	$( "#card-thumb" )
		.mouseenter(function(){
			thumbnailHover("card-overlay", true);
		})
		.mouseleave(function(){
			thumbnailHover("card-overlay", false);
		});
	
	/*cardThumb.onmouseenter=function(){
		thumbnailHover("card-overlay", true);
	};

	cardThumb.onmouseleave=function(){
		thumbnailHover("card-overlay", false);
	};*/
	
	/*cardThumb.onclick=function(){
		//$( "#img-viewer" ).fadeIn( "fast" );
		$( "#card-overlay" ).css( "visibility", "visible" );
		//$( "#prev-img" ).css( "visibility", "hidden" );
		showImg( "../images/illustrations/card.png", "#card-desc" );
	
		/*$( "#next-img" ).click(function() {
			$( "#card-desc" ).hide();
			$( "#lich-desc" ).show();
			$( "#current-img" ).attr( "src", "../images/illustrations/lich.png" )
			$( "#prev-img" ).css( "visibility", "visible" );
		});*/
	/*};
	
	$( "#img-viewer" ).click(function(){
		$( this ).fadeOut( "fast" );
	});*/
	
	/*lichThumb.onmouseenter=function(){
		thumbnailHover("lich-overlay", true);
	};

	lichThumb.onmouseleave=function(){
		thumbnailHover("lich-overlay", false);
	};
	
	// Show Illustration 
	lichThumb.onclick=function(){
		//$( "#current-img" ).attr( "src", "../images/illustrations/lich.png" )
		//$( "#img-viewer" ).fadeIn( "fast" );
		
		$( "#lich-overlay" ).css( "visibility", "visible" );
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
	};*/
});