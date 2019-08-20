 const canvas = document.getElementById('canvas');
 const context = canvas.getContext('2d');
 canvas.height = 1000;
 canvas.width = 1000;
 context.fillStyle = 'rgba(0,0,0,0.1)';
 context.strokeStyle = 'rgba(255,255,255,1)';
 context.translate(500, 500);

context.scale(4, 4);

 context.moveTo(0, 0);


 function draw(x, y, rev, inc) {

     context.fillRect(-500, -500, 1000, 1000);
     context.beginPath();
     // context.moveTo(x,y)

     x = rev ? x + 1 : x - 1;
     // context.lineTo(x, y);
     context.save();

     for (let i = 0; i < 12; i++) {

       
         context.ellipse(x, y, 20, inc, Math.PI / 4, 0, 2 * Math.PI);
         context.rotate(Math.PI / 180 * 30);
         context.strokeStyle = `rgba(${rnd(255)},${rnd(255)},${rnd(255)},0.1)`;
         context.stroke();
     }
     context.restore();
     context.strokeStyle = 'rgba(255,255,255,0.1)';
     context.stroke();

     if (inc > 300)
         inc = 0;

     if (x > 50 || x < 0) {
         rev = !rev;
        inc+=4;
     }
     requestAnimationFrame(() => {
         draw(x, y, rev, inc)
     })
 }

 draw(0, 0, true, 0);

 function rnd(limit){
    return Math.random()*limit;
 }