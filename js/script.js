$( document ).ready(function() {

	// get page name when each page loads
	var path = location.pathname;
	
	var curPage = path.slice( path.lastIndexOf( "/" ) + 1, path.indexOf( ".html" ) );
	
	console.log( curPage );
	
	// is user on mobile device?
	var isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		else{ return false; }
	}
	
	// get height of navigation
	navHeight = $( ".page-nav" ).height() + $( ".page-nav" ).outerHeight();
	
	// navigation initialized to be hidden at top of page
	//$( ".page-nav" ).css( "top", -$( ".page-nav" ).height() - $( ".page-nav" ).outerHeight());
	
	/************************************/
	/************ NAVIGATION ************/
	/************************************/
	
	// clean up code pls
	
	$( "#works-nav" ).hover(
		function() {
			if( curPage == "index" ) {
				$( "#works-nav img" ).attr("src", "images/icons/works-hover.svg");
			}
			else {
				$( "#works-nav img" ).attr("src", "../images/icons/works-hover.svg");
			}
		}, function() {
			if( curPage == "index" ) {
				$( "#works-nav img" ).attr("src", "images/icons/works.svg");
			}
			else {
				$( "#works-nav img" ).attr("src", "../images/icons/works.svg");
			}
		}
	);
	
	$( "#about-nav" ).hover(
		function() {
			if( curPage == "index" ) {
				$( "#about-nav img" ).attr("src", "images/icons/about-hover.svg");
			}
			else {
				$( "#about-nav img" ).attr("src", "../images/icons/about-hover.svg");
			}
		}, function() {
			if( curPage == "index" ) {
				$( "#about-nav img" ).attr("src", "images/icons/about.svg");
			}
			else {
				$( "#about-nav img" ).attr("src", "../images/icons/about.svg");
			}
		}
	);
	
	$( "#contact-nav" ).hover(
		function() {
			if( curPage == "index" ) {
				$( "#contact-nav img" ).attr("src", "images/icons/contact-hover.svg");
			}
			else {
				$( "#contact-nav img" ).attr("src", "../images/icons/contact-hover.svg");
			}
		}, function() {
			if( curPage == "index" ) {
				$( "#contact-nav img" ).attr("src", "images/icons/contact.svg");
			}
			else {
				$( "#contact-nav img" ).attr("src", "../images/icons/contact.svg");
			}
		}
	);
	
	$( "#home-nav" ).hover(
		function() {
			if( curPage == "index" ) {
				$( "#home-nav img" ).attr("src", "images/icons/home-hover.svg");
			}
			else {
				$( "#home-nav img" ).attr("src", "../images/icons/home-hover.svg");
			}
		}, function() {
			if( curPage == "index" ) {
				$( "#home-nav img" ).attr("src", "images/icons/home.svg");
			}
			else {
				$( "#home-nav img" ).attr("src", "../images/icons/home.svg");
			}
		}
	);
	
	$( "#index-nav" ).hover(
		function() {
			if( curPage == "index" ) {
				$( "#index-nav img" ).attr("src", "images/icons/home-hover.svg");
			}
			else {
				$( "#index-nav img" ).attr("src", "../images/icons/home-hover.svg");
			}
		}, function() {
			if( curPage == "index" ) {
				$( "#index-nav img" ).attr("src", "images/icons/home.svg");
			}
			else {
				$( "#index-nav img" ).attr("src", "../images/icons/home.svg");
			}
		}
	);
	
	// page content placed depending on height of nav bar
	$( ".page-content" ).css( "margin-top", $( ".page-nav" ).height() + 60 );
	
	// a check if menu is (navigation) on
	var menuOn = false;
	
	// open menu (navigation)
	/*var openMenu = function() {
		$( ".menu-toggle" ).fadeOut( "fast", function() {
				// toggle becomes white when menu is open
				$( ".menu-toggle img" ).attr( "src", "../images/icons/menu-white.svg" );
				$( ".menu-toggle" ).fadeIn( "fast" );
			});
			
			// bring navigation down into view
			$( ".page-nav" ).animate({
				top:"+=" + navHeight
			}, 500, function() {
				// bounce effect
				$( ".page-nav" ).animate({
					top:"-=1vh"
			}, 250)
			});
			
			menuOn = true;
	}
	
	// close menu (navigation)
	var closeMenu = function( changePage, name ) {
		$( ".menu-toggle" ).fadeOut( "fast", function() {
			// toggle becomes grey again
			$( ".menu-toggle img" ).attr( "src", "../images/icons/menu.svg" );
			$( ".menu-toggle" ).fadeIn( "fast" );
		});
		
		$( ".page-nav" ).animate({
			// navigation goes up out of view
			top:"-=" + navHeight
		}, 500, function() {
			// unneccessary bounce effect lol
			$( ".page-nav" ).animate({
				top:"+=1vh"
		}, 250, function() {
		
			// if going to new page
			if( changePage ){
				//console.log( "dis is happening" );
				
				// if not going to home page
				if( name != "home" ){
					//window.location.href = "../html/" + name + ".html";
					window.location.href = "../html/" + name + ".html";
				}
				// else go to index
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
	});*/
	
	/************************************/
	/************** PAGES ***************/
	/************************************/
	
	/*var page = function( name ){
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
					//closeMenu( true, name );
					
					// go to page
					//window.location.href = "../html/" + id + ".html"; // when pushing to GitHub
						
					// if not going to home page
					if( name != "home" ){
						//window.location.href = "../html/" + name + ".html";
						window.location.href = "../html/" + name + ".html";
					}
					// else go to index
					else{
						window.location.href = "../index.html";
					}
				
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
	
	// initialize each navigation page link
	for( var i = 0; i < pages.length; i++ ){
		pages[i].goTo( curPage );
	}*/
	
	/************************************/
	/************ INDEX NAV *************/
	/************************************/
	
	// get height of main index page
	/*mainHeight = $( "#main" ).height() + $( "#main" ).outerHeight() + $( "#main" ).innerHeight();
	
	// go to page from index
	function navGoTo( id ){
		$( "#main #nav #" + id + "-nav" ).unbind( "click" ).click(function(){
			
			// redirect to new page
			//window.location.href = "../Portfolio 2015/html/" + id + ".html"; // testing locally
			window.location.href = "../html/" + id + ".html"; // when pushing to GitHub
			curPage = id;
			
			// scroll to top
			/*$( "html, body" ).animate({ scrollTop: 0 }, "fast", function() {
				
				// index page body slide up
				$( "#main" ).animate({
					bottom:"+=" + mainHeight
				}, 1500, function() {
				
					// index page is hidden
					$( "#main" ).css( "display", "none" );
					
					// redirect to new page
					window.location.href = "../Portfolio 2015/html/" + id + ".html"; // testing locally
					//window.location.href = "../html/" + id + ".html"; // when pushing to GitHub
					curPage = id;
				});
			})*/
		/*});
	}
	
	navGoTo( "works" );
	navGoTo( "about" );
	navGoTo( "contact" );*/
	
	
	/************************************/
	/************* PROJECTS *************/
	/************************************/
	
	var project = function( title, idName ){
		return {
			title: this.title, // image title
			idName: this.idName, // id name
			imgList: [], // list of images used on page
			scrollPos: null,
			
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
				
				// if not mobile, show overlays upon hover
				if( !isMobile() ){
					$( "#" + id + "-thumb" )
						.mouseenter(function(){ 
							$( "#" + id + "-overlay" ).css( "visibility", "visible" ).hide().fadeIn( "fast" );
						})
						.mouseleave(function(){
							$( "#" + id + "-overlay" ).css( "visibility", "hidden" );
						});
				}
				// else show titles immediately
				else{
					$( ".thumb-overlay" ).css( "visibility", "hidden");
					//$( ".mobile-overlay" ).show();
				}
			}, // hovering over thumbnails
			
			displayToggle: function(){
				var id = this.getIdName();
				var obj = this;
				
				scrollPos = $( "body" ).scrollTop();
				
				// hide nav and show project info
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
					
					// if navigation menu is open, close before going back
					/*if( menuOn ){
						closeMenu();
					}*/
				
					$( "body ").scrollTop( scrollPos );
				
					$( "#" + id + "-details" ).hide();
					$( "#" + id + "-banner" ).hide();
					$( "#projects" ).show();
					obj.changeTitle( false );
				});
			}, // hide project page
			
			changeTitle: function( isViewing ){
				if( isViewing ) { document.title = this.getTitle() + " | Joanne Arboleda"; }
				else { document.title = "Works | Joanne Arboleda"; }
			} // change title of page to name of project back and back to works
		}
	};
	
	// list of project objects
	var projectList = [];
	
	projectList.push ( project( "TagMonkey Website & App", "TM" ) );
	projectList.push ( project( "Design Thinking Mobile App", "DT" ) );
	projectList.push ( project( "Business Travel Mobile App", "TY" ) );
	projectList.push ( project( "Food Delivery Web App", "MB" ) );
	projectList.push ( project( "Davis Computer Science Club", "CS" ) );
	
	// initialize project objects
	for( var i = 0; i < projectList.length; i++ ){
		projectList[i].hoverToggle();
		projectList[i].displayToggle();
		projectList[i].hideToggle();
	}
	
	// initialize gif playing in DT project
	var playGifReady = function(){
		$( ".gif-play" ).click( function(){
				var id = $( this ).attr( "id" );
				console.log( id );
				
				$( this ).attr( "src", "../images/design-thinking/" + id + ".gif" );
		});
	}
	
	playGifReady();
	
	/************************************/
	/*********** IMG GALLERY ************/
	/************************************/
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
                var srcName;
				if( this.getIdName() != "day31" && this.getIdName() != "food-gifs" )
                    srcName = "../images/illustrations/" + this.getIdName() + ".png";
                else
                    srcName = "../images/illustrations/" + this.getIdName() + ".gif";
                
                return srcName;
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
			
			display: function(){
				var id = this.getIdName();
				var src = this.getSrc();
				//var index = this.getIndex();
				
				$( "#" + id + "-desc" ).show();
				$( "#current-img" ).attr( "src", src );

				//console.log( this.getIndex() );
				
				/*if( index == 0 || index != len - 1 ){
					$( "#next-arrow" ).show();
				}
				if( index != 0 || index == len - 1 ){
					$( "#prev-arrow" ).show();
				}*/
				
				$( ".img-desc" ).scrollTop( 0 );
				
				
				if( !isMobile() ){
					$( ".img-desc p" ).css( "width", "50%" );
				}
				else{
					$( ".img-container" ).css( "height", "80%" );
					$( ".img-desc" ).css( "overflow", "scroll" );
					/*$( ".img-desc" ).css( "padding-top", "2em" );
					$( ".img-desc" ).css( "padding-bottom", "2em" );*/
					$( ".img-desc" ).css( "overflow-x", "hidden" );
					$( ".desc-text" ).css( "margin-top", "1em" );
					$( ".exit-viewer" ).css( "height", "0.9em" );
					$( ".exit-viewer" ).css( "width", "0.9em" );
					//$( ".exit-viewer" ).css( "line-height", "0.75em" );
					//$( ".exit-viewer" ).css( "font-size", "1.5em" );
					//$( ".exit-viewer" ).css( "padding-left", "1px" );
				}
				
				// show viewer if not already on
				//if( !viewerOn ){
					$( "#bg-overlay" ).show().fadeIn( "slow", function(){
						$( ".img-container" ).slideToggle( "slow" );
						$( "html, body" ).animate({ scrollTop: $(document).height() }, "fast", function() {							
							$( "body, html" ).css( "overflow", "hidden" );
							$( "#bg-overlay" ).on( "touchmove", function(e){ 
								 //prevent native touch activity like scrolling
								 e.preventDefault(); 
							});
						});
					});
				//}
			}, // display image in viewer
			
			hide: function(){
				var id = this.getIdName();
				
				$( "#bg-overlay" ).hide();
                $( ".img-desc" ).scrollTop( 0 );
				$( ".img-desc" ).hide();
				
				// hide viewer if not already off
				//if( viewerOn ){
					$( "body, html" ).css( "overflow", "auto" );
					$( "body, html" ).css( "height", "auto" );
					$( ".img-container" ).slideToggle( "slow" );
				//}
			}, // hide image
			
			viewerToggle: function(){
				var obj = this;
				var id = this.getIdName();
				
				$( "#" + id + "-thumb" ).unbind( "click" ).click(function(){
					obj.display();
				});
				
				$( "#bg-overlay" ).unbind( "click" ).click(function(){
					obj.hide();
				});

				$( ".exit-viewer" ).unbind( "click" ).click(function(){
					obj.hide();
				});
			} // toggle image viewer
		}
	};
	
	// gallery object
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
			}, // add image to gallery
			
			initialize: function(){
				var obj = this;
				var list = this.getList();
				var len = list.length;
				
				for( var i = 0; i < len; i++ ){
					list[i].preload();
					list[i].hoverToggle();
					list[i].viewerToggle();
				}
			}
		}
	};	
	
	// initializing new gallery
	imgGallery = new gallery();
	
	// initializing gallery images
	imgGallery.addImg( galleryPic( "<em>Legend of Zelda</em>-Inspired Card", "card" ) ); // Zelda card, 0
	imgGallery.addImg( galleryPic( "<em>Adventure Time</em> Lich Poster", "lich" ) ); // Lich poster, 1
	imgGallery.addImg( galleryPic( "Scarf Girl Illustration", "scarf" ) ); // Scarf girl illustration, 2
	imgGallery.addImg( galleryPic( "Bookish Girl Illustration", "book" ) ); // 3
	imgGallery.addImg( galleryPic( "A Special Gift", "christmas" ) ); // 4
	imgGallery.addImg( galleryPic( "Food GIFs", "food-gifs" ) ); // 5
	imgGallery.addImg( galleryPic( "Day 31", "day31" ) ); // 6
	
	imgGallery.initialize();
});