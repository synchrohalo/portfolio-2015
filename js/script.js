$( document ).ready(function() {

	/********** WORKS **********/

	function show(id,dispType){
		//document.getElementById(id).style.display = dispType;
		$( "#" + id ).css( "display", dispType );
	}

	function hide(id){
		//document.getElementById(id).style.display = "none";
		$( "#" + id ).css( "display", "none" );
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
	
	var dtThumb = document.getElementById("DT-thumb");
	var dtBack = document.getElementById("DT-back");
	var tyThumb = document.getElementById("TY-thumb");
	var tyBack = document.getElementById("TY-back");
	var mbThumb = document.getElementById("MB-thumb");
	var mbBack = document.getElementById("MB-back");
	
	
	function navGoTo( id ){
		$( "#" + id + "-nav" ).unbind( "click" ).click(function(){
			$( "#main" ).animate({
				bottom:"+=100vh"
			}, 750, function() {
				$( "#main" ).css( "display", "none" );
				//window.location.href = "../Portfolio 2015/html/" + id + ".html";
				window.location.href = "../html/" + id + ".html";
			});
		});
	}
	
	navGoTo( "works" );
	navGoTo( "about" );
	navGoTo( "contact" );
	
	$( "#home-nav" ).unbind( "click" ).click(function(){
		$( "#main" ).animate({
			bottom:"-=100vh"
		}, 750, function() {
			//window.location.href = "../Portfolio 2015/html/" + id + ".html";
			window.location.href = "../html/" + id + ".html";
		});
	});
	
	dtThumb.onclick=function(){
		show("DT-details","block");
		//$( "#DT-banner" ).slideToggle( 600 );
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
		//$( "#DT-banner" ).slideToggle( "slow" );
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
	
	/************** IMAGE GALLERY ***************/
	var galleryPic = function( title, idName ){
		return {
			title: this.title, // image title
			idName: this.idName, // id name
			index: null, // index in gallery
			
			getTitle: function(){
				return title;
			}, // get title
			
			getIdName: function(){
				return idName;
			}, // get id name
			
			getSrc: function(){
				return "../images/illustrations/" + this.getIdName() + ".png";
			}, // get image URL
			
			getIndex: function(){
				return index;
			}, // get index
			
			setIndex: function( newIndex ){
				index = newIndex;
			}, // set index
			
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
			
			display: function( viewerOn, len ){
				var id = this.getIdName();
				var src = this.getSrc();
				var index = this.getIndex();
				
				$( "#" + id + "-desc" ).show();
				$( "#current-img" ).attr( "src", src );
				
				//console.log(index);
				//console.log(len);
				
				if( index == 0 || index != len - 1 ){
					$( "#next-arrow" ).show();
				}
				if( index != 0 || index == len - 1 ){
					$( "#prev-arrow" ).show();
				}
				
				// show viewer if not already on
				if( !viewerOn ){
					$( "#bg-overlay" ).show();
					$( "body" ).height( $( "body" ).height() + $( ".img-container" ).height() );
					$( ".img-container" ).slideToggle( "slow" );
					$( "html, body" ).animate({ scrollTop: $(document).height() }, "fast");
				}
			}, // display image in viewer
			
			hide: function( viewerOn ){
				var id = this.getIdName();
				
				$( "#" + id + "-overlay" ).css( "visibility", "hidden" );
				$( "#next-img" ).hide();
				$( "#prev-img" ).hide();
				$( "#bg-overlay" ).hide();
				$( ".img-desc" ).hide();
				
				// hide viewer if not already off
				if( viewerOn ){
					$( "body" ).height( $( "body" ).height() - $( ".img-container" ).height() );
					$( ".img-container" ).slideToggle( "slow" );
				}
			}, // hide image
			
			viewerToggle: function( len ){
				var obj = this;
				var id = this.getIdName();
				
				$( "#" + id + "-thumb" ).unbind( "click" ).click(function(){
					obj.display( false, len );
				});
				
				$( "#bg-overlay" ).unbind( "click" ).click(function(){
					obj.hide( true );
				});
				$( ".exit-viewer p" ).unbind( "click" ).click(function(){
					obj.hide( true );
				});
			} // toggle image viewer
		}
	};
	
	var gallery = function(){
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
			
			initialize: function(){
				var obj = this;
				var list = this.getList();
				var len = list.length;
				
				for( var i = 0; i < len; i++ ){
					list[i].preload();
					list[i].setIndex( i );
					list[i].hoverToggle();
					list[i].viewerToggle( len );
				}
			}
		}
	};	
	
	// Initializing new gallery
	imgGallery = new gallery();
	
	// Initializing gallery images
	imgGallery.addImg( galleryPic( "<em>Legend of Zelda</em>-Inspired Card", "card" ) ); // Zelda card, 0
	imgGallery.addImg( galleryPic( "<em>Adventure Time</em> Lich Poster", "lich" ) ); // Lich poster, 1
	imgGallery.addImg( galleryPic( "Scarf Girl Illustration", "scarf" ) ); // Scarf girl illustration, 2
	imgGallery.addImg( galleryPic( "Bookish Girl Illustration", "book-girl" ) ); // Bookish girl illustration, 3
	
	imgGallery.initialize();
});