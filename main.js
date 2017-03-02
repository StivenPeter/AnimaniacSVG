
var svg = document.getElementById("vimage");
var rect = svg.getBoundingClientRect();
var requestID = 0;
var clear = function(e) {
    while(svg.lastChild) {
	svg.removeChild(svg.lastChild);
};
    x = -1;

}; 

var anime = function() {
    window.cancelAnimationFrame(requestID);
    var radius = 0; 
    var xcor = rect.width/2;
    var ycor = rect.height/2;
    var size = 0;
    var grow = true; 
    var drawDot = function() {
	var c = document.createElementNS("https://www.w3.org/2000/svg","circle");
	c.setAttribute("cx", xcor);
	c.setAttribute("cy", ycor);
	c.setAttribute("r", size);
	c.setAttribute("fill","red");
	svg.appendChild(c);


};



};
