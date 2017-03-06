$( document ).ready(function(){
console.log(document.getElementById('my-portfolio'))

var waypoint = new Waypoint({
  element: document.getElementById('my-portfolio'),
  handler: function() {
   notify('Basic waypoint triggered')
  }
})

});