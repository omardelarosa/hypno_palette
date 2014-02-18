// Circles constructor

var apiCallback = function(data){
  circles.palette = data[0].colors 
  // console.log(data)

  circles.palette_meta = data[0]

  circles.animate();
}

var Circles = function(){

  this.canvas_view = new MyCanvasView();

  this.colors = [
    "#3FCEEE",
    "#FFFFFF",
    "#FF530D"
  ]

  this.document_width = $(document).width();

  this.document_height = $(document).height();

  this.paper = Raphael(
    this.canvas_view.el,
    this.document_width,
    this.document_height
    )

  // this.makeRecursiveCircles(this.document_width/2+200);
  // this.animate();

  this.getColorPalette()

}

Circles.prototype.makeCircle = function(radius){

  // all coordinates are relative to canvas or paper
  this.circle = this.paper.circle(
    this.document_width/2, // x coord of center
    this.document_height/2, // y coord of center
    radius // radius
  )

  this.circle.attr("fill", "#"+this.palette[Math.floor(Math.random()*5)])
  this.circle.attr("stroke", "#000")

}

Circles.prototype.makeRecursiveCircles = function(start_radius) {
  if (start_radius <= 0) {
    return true;
  } else {
    this.makeCircle(start_radius)
    return this.makeRecursiveCircles(start_radius-10)
  }
};

Circles.prototype.reload = function(){

  this.paper.clear()
  this.makeRecursiveCircles(this.document_width/2+200);

}

Circles.prototype.animate = function(){
  var self = this;
  this.interval = setInterval(function(){
    self.reload();
  },100)
}

Circles.prototype.getColorPalette = function(){

  var script_tag = [
    "<script src='",
      'http://www.colourlovers.com/api/palettes/random?format=json',
      "&jsonCallback=apiCallback",
    "'></script>"
  ]

  $('body').append(script_tag.join(""))

}

var MyCanvasView = Backbone.View.extend({

  el: function(){
    return $('#my_canvas');
  }

})



// Document Ready Callback

$(function(){

  window.circles = new Circles();

})

















