$(document).ready(function() {
  var canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var img = new Image();
    img.src = "./img/bretzel.png"; 

    var init = [];
    var maxParts = 1000;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 30,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      })
    }

    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for(var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.drawImage(img, p.x, p.y, p.l, p.l); 
      }
      move();
    }

    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    setInterval(draw, 30);

    setTimeout(function() {
      canvas.style.display = 'none';
    }, 30000); // 30000 milliseconds = 30 seconds
  }
});
