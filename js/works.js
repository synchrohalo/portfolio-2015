$( document ).ready(function() {
	
	/********** PROJECTS **********/
	var isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		else{ return false; }
	}
	
	
	var project = function( title, idName ){
		return {
			title: this.title, // image title
			idName: this.idName, // id name
			imgList: [], // list of images used on page
			
			getTitle: function(){
				return title;
			}, // get title
			
			getIdName: function(){
				return idName;
			}, // get id name
			
			getImgList: function(){
				return imgList;
			}, // get index
			
			preload: function(){
				var imgs = this.getImgList();
				var loadedImgs = [];
				
				for(var i = 0; i < imgs.length; i++){
					loadedImgs.push( new Image() );
					loadedImgs[i].src = imgs[i];
				}
			}, // preload images on project page
			
			hoverToggle: function(){
				var id = this.getIdName();
				
				if( !isMobile() ){
					$( "#" + id + "-thumb" )
						.mouseenter(function(){ 
							$( "#" + id + "-overlay" ).css( "visibility", "visible" ).hide().fadeIn( "fast" );
						})
						.mouseleave(function(){
							$( "#" + id + "-overlay" ).css( "visibility", "hidden" );
						});
				}
				else{
					$( ".thumb-overlay" ).css( "visibility", "hidden");
					$( ".mobile-overlay" ).show();
				}
			}, // hovering over thumbnails
			
			displayToggle: function(){
				var id = this.getIdName();
				var obj = this;
				
				$( "#" + id + "-thumb" ).unbind( "click" ).click(function(){
					$( "#projects" ).hide();
					$( "#" + id + "-details" ).show();
					$( "#" + id + "-banner" ).show();
					obj.changeTitle( true );
					
				});
			}, // show project page
			
			hideToggle: function(){
				var id = this.getIdName();
				var obj = this;
			
				$( "#" + id + "-back" ).unbind( "click" ).click(function(){
					$( "#" + id + "-details" ).hide();
					$( "#" + id + "-banner" ).hide();
					$( "#projects" ).show();
					obj.changeTitle( false );
				});
			}, // hide project page
			
			changeTitle: function( isViewing ){
				if( isViewing ) { document.title = this.getTitle() + " | Joanne Arboleda"; }
				else { document.title = "Works | Joanne Arboleda"; }
			}
		}
	};
	
	var projectList = [];
	
	projectList.push ( project( "Design Thinking Mobile App", "DT" ) );
	projectList.push ( project( "Business Travel Mobile App", "TY" ) );
	projectList.push ( project( "Food Delivery Web App", "MB" ) );
	
	for( var i = 0; i < projectList.length; i++ ){
		projectList[i].hoverToggle();
		projectList[i].displayToggle();
		projectList[i].hideToggle();
	}
	
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
				
				if( !isMobile() ){
					$( "#" + id + "-thumb" )
						.mouseenter(function(){ 
							$( "#" + id + "-overlay" ).css( "visibility", "visible" ).hide().fadeIn( "fast" );
						})
						.mouseleave(function(){
							$( "#" + id + "-overlay" ).css( "visibility", "hidden" );
						});
				}
				else{
					$( ".mobile-overlay" ).show();
				}
			}, // hovering over thumbnails
			
			display: function( viewerOn, len ){
				var id = this.getIdName();
				var src = this.getSrc();
				var index = this.getIndex();
				
				$( "#" + id + "-desc" ).show();
				$( "#current-img" ).attr( "src", src );
				
				if( index == 0 || index != len - 1 ){
					$( "#next-arrow" ).show();
				}
				if( index != 0 || index == len - 1 ){
					$( "#prev-arrow" ).show();
				}
				
				$( ".img-desc" ).scrollTop( 0 );
				
				
				// show viewer if not already on
				if( !viewerOn ){
					$( "#bg-overlay" ).show().fadeIn( "slow" );
					//$( "body" ).height( $( "body" ).height() + ( $( ".img-container" ).height() * 1.10 ) );
					$( ".img-container" ).slideToggle( "slow" );
					$( "html, body" ).animate({ scrollTop: $(document).height() }, "fast");
				}
				
				if( !isMobile() ){
					$( ".img-desc p" ).css( "width", "50%" );
				}
				else{
					$( ".img-desc" ).css( "overflow", "scroll" );
					$( ".img-desc" ).css( "overflow-x", "hidden" );
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
					$( "body" ).height( $( "body" ).height() - ( $( ".img-container" ).height() * 1.10 ) );
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
	imgGallery.addImg( galleryPic( "Bookish Girl Illustration", "book" ) ); // Bookish girl illustration, 3
	
	imgGallery.initialize();
});