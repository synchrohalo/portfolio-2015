$( document ).ready(function() {
	function navGoTo( id ){
		$( "#" + id + "-nav" ).unbind( "click" ).click(function(){
			$( "html, body" ).animate({ scrollTop: 0 }, "fast", function() {
				$( "#main" ).animate({
					bottom:"+=100vh"
				}, 1000, function() {
					$( "#main" ).css( "display", "none" );
					//window.location.href = "../Portfolio 2015/html/" + id + ".html"; // testing locally
					window.location.href = "../html/" + id + ".html"; // when pushing to GitHub
				});
			})
		});
	}
	
	navGoTo( "works" );
	navGoTo( "about" );
	navGoTo( "contact" );
	
	/*$( "#home-nav" ).unbind( "click" ).click(function(){
		$( "#main" ).animate({
			bottom:"-=100vh"
		}, 750, function() {
			window.location.href = "../Portfolio 2015/html/" + id + ".html";
			//window.location.href = "../html/" + id + ".html";
		});
	});*/
	
	var isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}
		else{ return false; }
	}
	
	if( isMobile() ){
		$( ".page-nav" ).css( "min-height", "9vh" );
		$( "#nav.page-nav li p" ).css( "line-height", "9vh" );
	}
});