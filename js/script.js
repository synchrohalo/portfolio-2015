$( document ).ready(function() {
	var path = location.pathname;
	
	var curPage = path.slice( path.lastIndexOf( "/" ) + 1, path.indexOf( ".html" ) );
	
	console.log( curPage );
	
	var isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		else{ return false; }
	}
	
	navHeight = $( ".page-nav" ).height() + $( ".page-nav" ).outerHeight();
	
	$( ".page-nav" ).css( "top", -$( ".page-nav" ).height() - $( ".page-nav" ).outerHeight());
	
	var menuOn = false;
	
	var openMenu = function() {
		$( ".menu-toggle" ).fadeOut( "fast", function() {
				$( ".menu-toggle img" ).attr( "src", "../images/icons/menu-white.svg" );
				$( ".menu-toggle" ).fadeIn( "fast" );
			});
			
			$( ".page-nav" ).animate({
				top:"+=" + navHeight
				//top:"+=29vh"
			}, 500, function() {
				$( ".page-nav" ).animate({
					top:"-=1vh"
			}, 250)
			});
			
			
			menuOn = true;
	}
	
	var closeMenu = function( changePage, name ) {
		$( ".menu-toggle" ).fadeOut( "fast", function() {
			$( ".menu-toggle img" ).attr( "src", "../images/icons/menu.svg" );
			$( ".menu-toggle" ).fadeIn( "fast" );
		});
		
		$( ".page-nav" ).animate({
			top:"-=" + navHeight
			//top:"-=29vh"
		}, 500, function() {
			$( ".page-nav" ).animate({
				top:"+=1vh"
		}, 250, function() {
			if( changePage ){
				console.log( "dis is happening" );
				
				if( name != "home" ){
					//window.location.href = "../html/" + name + ".html";
					window.location.href = "../html/" + name + ".html";
				}
				else{
					window.location.href = "../index.html";
				}
			}
		})
		});
		
		menuOn = false;
	}
	
	// open and close menu on click
	$( ".menu-toggle" ).click( function() {
		if( !menuOn ){
			openMenu();
		}
		else{
			closeMenu( false, null );
		}
	});
	
	
	/************** PAGES ***************/
	var page = function( name ){
		return {
			name: this.name, // page name
			
			getName: function(){
				return name;
			}, // get name
			
			goTo: function( curPage ) {
				var name = this.getName();
				
				
				
				// remove active icon from previous page
				$( "#" + name + "-nav" ).unbind( "click" ).click( function() {
					$( "#" + curPage + "-nav li" ).removeClass( "cur-page" );
					
					// current page icon active
					$( "#" + name + "-nav li" ).addClass( "cur-page" );
					
					// scroll menu back up
					closeMenu( true, name );
					
					// go to page
					//window.location.href = "../html/" + id + ".html"; // when pushing to GitHub
				
					// change curPage variable
					curPage = name;
				});
			} // go to page
		}
	};
	
	var pages = []; // list of website pages
	pages.push( page( "works" ) );
	pages.push( page( "about" ) );
	pages.push( page( "contact" ) );
	pages.push( page( "home" ) );
	
	for( var i = 0; i < pages.length; i++ ){
		pages[i].goTo( curPage );
	}
	
	/********** INDEX NAV **********/
	mainHeight = $( "#main" ).height() + $( "#main" ).outerHeight() + $( "#main" ).innerHeight();
	
	
	function navGoTo( id ){
		$( "#main #nav #" + id + "-nav" ).unbind( "click" ).click(function(){
			console.log( "i am hurr" );
			$( "html, body" ).animate({ scrollTop: 0 }, "fast", function() {
				$( "#main" ).animate({
					//bottom:"+=100vh"
					bottom:"+=" + mainHeight
				}, 1500, function() {
					$( "#main" ).css( "display", "none" );
					//window.location.href = "../Portfolio 2015/html/" + id + ".html"; // testing locally
					window.location.href = "../html/" + id + ".html"; // when pushing to GitHub
					curPage = id;
				});
			})
		});
	}
	
	navGoTo( "works" );
	navGoTo( "about" );
	navGoTo( "contact" );
	
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
					if( menuOn ){
						closeMenu();
					}
				
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
						.unbind( "mouseenter" ).mouseenter(function(){ 
							$( "#" + id + "-overlay" ).fadeIn( "fast", function(){
								console.log( id + " works" );
							});
							console.log( "#" + id + "-overlay" );
						})
						.unbind( "mouseleave" ).mouseleave(function(){
							$( "#" + id + "-overlay" ).fadeOut( "fast" );
						})
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
				
				
				if( !isMobile() ){
					$( ".img-desc p" ).css( "width", "50%" );
				}
				else{
					$( ".img-container" ).css( "height", "100%" );
					$( ".img-desc" ).css( "overflow", "scroll" );
					$( ".img-desc" ).css( "overflow-x", "hidden" );
					$( ".exit-viewer" ).css( "font-size", "1.5em" );
					$( ".exit-viewer" ).css( "padding-left", "1px" );
				}
				
				// show viewer if not already on
				if( !viewerOn ){
					$( "#bg-overlay" ).show().fadeIn( "slow", function(){
						//$( "body" ).height( $( "body" ).height() + ( $( ".img-container" ).height() * 1.10 ) );
						$( ".img-container" ).slideToggle( "slow" );
						$( "html, body" ).animate({ scrollTop: $(document).height() }, "fast", function() {							
							$( "body, html" ).css( "overflow", "hidden" );
							$( "#bg-overlay" ).on( "touchmove", function(e){ 
								 //prevent native touch activity like scrolling
								 e.preventDefault(); 
							});
							//$( "body, html" ).css( "height", "100%" );
						});
					});
				}
			}, // display image in viewer
			
			hide: function( viewerOn ){
				var id = this.getIdName();
				
				$( "#" + id + "-overlay" ).css( "visibility", "hidden" );
				//$( "#next-img" ).hide();
				//$( "#prev-img" ).hide();
				$( "#bg-overlay" ).hide();
				$( ".img-desc" ).hide();
				
				// hide viewer if not already off
				if( viewerOn ){
					$( "body, html" ).css( "overflow", "auto" );
					$( "body, html" ).css( "height", "auto" );
					//$( "body" ).height( $( "body" ).height() - ( $( ".img-container" ).height() * 1.10 ) );
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
				$( ".exit-viewer" ).unbind( "click" ).click(function(){
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
	imgGallery.addImg( galleryPic( "Bookish Girl Illustration", "book" ) );
	
	imgGallery.initialize();
});