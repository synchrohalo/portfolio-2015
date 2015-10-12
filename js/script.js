$( document ).ready(function() {

	/********** INDEX **********/
	function navGoTo( id ){
		$( "#" + id + "-nav" ).unbind( "click" ).click(function(){
			$( "html, body" ).animate({ scrollTop: 0 }, "fast", function() {
				$( "#main" ).animate({
					bottom:"+=100vh"
				}, 750, function() {
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
	
	$( "#home-nav" ).unbind( "click" ).click(function(){
		$( "#main" ).animate({
			bottom:"-=100vh"
		}, 750, function() {
			window.location.href = "../Portfolio 2015/html/" + id + ".html";
			//window.location.href = "../html/" + id + ".html";
		});
	});
});