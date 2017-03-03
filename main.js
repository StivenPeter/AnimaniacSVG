
var svg = document.getElementById("vimage");
var rect = svg.getBoundingClientRect();
var requestID = 0;
var img = new Image();
img.src = "DVD.png";

var clear = function(e) {
	window.cancelAnimationFrame( requestID );
	while(svg.lastChild){
		svg.removeChild(svg.lastChild);
    };
}; 

var anime = function() {
  window.cancelAnimationFrame( requestID );
	
    console.log(requestID);

    //init params for drawing dot
    var radius = 0;
    var xcor = rect.width / 2;
    var ycor = rect.height / 2;
    var grow = true;

    //Q: what happens w/ & w/o next line?
    //window.cancelAnimationFrame( requestID );

    var drawDot = function() {
	console.log( requestID )

	clear();
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx",xcor);
	c.setAttribute("cy",ycor);
	c.setAttribute("r", radius);
	c.setAttribute("fill","red");
	document.getElementById("vimage").appendChild(c);
	if(radius !=rect.width/2 && grow){
	    radius++;
	};
	if (radius == rect.width/2) {
		grow = false;
	};
	if (radius != 0 && grow == false){
		radius--;
	};
	if (radius == 0) {
		grow = true;
	};
	requestID = window.requestAnimationFrame( drawDot );
    };
    drawDot();
};
var animeDvd = function() {
	
    window.cancelAnimationFrame( requestID );
	

    //init params for drawing square
    var recx = 70;
    var recy = 160;
    var ycor = Math.round(Math.random()*(rect.height-recy));
    var xcor = Math.round(Math.random()*(rect.width-recx));
    var xdir = 1;
    var ydir = 1;

    //Q: what happens w/ & w/o next line?
    //window.cancelAnimationFrame( requestID );

    var dvd = function() {
		clear();
		var c = document.createElementNS("http://www.w3.org/2000/svg","image");
		c.setAttribute("href","dvd.png");
		c.setAttribute("x",xcor);
		c.setAttribute("y", ycor);
		c.setAttribute("height", recy);
		c.setAttribute("width", recx);
		c.setAttribute("fill","red");
		document.getElementById("vimage").appendChild(c);
		console.log(xcor);
		if(xcor == rect.width - recx|| xcor < 0){
			xdir = xdir * -1;
		};
		if(ycor ==rect.height-recy|| ycor < 0){
		    ydir = ydir * -1;
		};
		xcor+=xdir;
		ycor+=ydir;
		requestID = window.requestAnimationFrame( dvd );
  	  	};
  	dvd();
};

var stop = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};
document.getElementById('dvd').addEventListener( "click", animeDvd);
document.getElementById('circle').addEventListener( "click", anime );
document.getElementById( "stop" ).addEventListener( "click", stop );
document.getElementById( "clearIt" ).addEventListener( "click", clear );