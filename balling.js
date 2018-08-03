'use strict';

// using library example from CodePengit @@fuglywalrus

var canvas = document.querySelector('canvas');

// dimensions of a canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get a context to work with
var c = canvas.getContext('2d');

// set a canvas as a background 
document.body.style.background = 'url(' + canvas.toDataURL() + ')';

// array of colors for a balls
var colorArray = ['#392B58', '#645E9D', '#6C969D', '#99D5C9', '#2D0320'];

// Circle object with coordinates, radiuses and colors (randomly selected from array)
function Circle(x, y, dx, dy, radius) 
{
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  // function to draw a vector of movement
  this.draw = function() 
  {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  // functions to update coordinates if balls hit a walls
  this.update = function() 
  {
    if (this.x + radius > innerWidth || this.x - this.radius < 0) 
    {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) 
    {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

// array of current balls on a screen
var circleArray = [];

// create an new array of balls and fill it with randomly generated objects
function init() 
{
  circleArray = [];

  for (var i = 0; i < 800; i++) 
  {
    var x = Math.random() * (innerWidth - radius * 3) + radius;
    var y = Math.random() * (innerHeight - radius * 3) + radius;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    var radius = Math.random() * 5 + 1;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

// make balls moving
function animate() 
{
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) 
  {
    circleArray[i].update();
  }
}

// Start a whole process
init();
animate();

