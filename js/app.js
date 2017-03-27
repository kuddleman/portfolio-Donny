$( document ).ready(function(){
console.log(document.getElementById('my-portfolio'))

var portfolioWaypoint = new Waypoint({
  element: $('#my-portfolio'),
  handler: function() {
   $('#nav-portfolio').css({color: "black"})
  }
})

var aboutWaypoint = new Waypoint({
  element: $('#about'),
  handler: function() {
   $('#nav-about').css({color: "black"})
  }
})

var contactWaypoint = new Waypoint({
  element: $('#contact'),
  handler: function(direction) {
	if (direction === "down") {
		   $('#nav-contact').css({color: "black"})
		   $('#nav-about').css({color: "white"})
		   $('#nav-portfolio').css({color: "white"})
	}
	else {
//		  make projects black and others white
	}
  }
})

// if scrolling down 
// 	we highlight the current page
//	unhighlight all others




});