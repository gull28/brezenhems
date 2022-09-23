function line() {

   const canvas = document.getElementById('myCanvas');

   var context = canvas.getContext("2d");

   var x1 = parseInt(document.getElementById('x1_input').value);
   var x2 = parseInt(document.getElementById('x2_input').value);
   var y1 = parseInt(document.getElementById('y1_input').value);
   var y2 = parseInt(document.getElementById('y2_input').value);

   // var x1 = 15;
   // var x2 = 200;
   // var y1 = 15;
   // var y2 = 200;

   var dx = Math.abs(x2 - x1);
   var dy = Math.abs(y2 - y1);

   if(x1 < x2){
    sx = 1;
   }
   else{
    sx = -1;
   }

   if(y1 < x2){
    sy = 1;
   }
   else{
    sy = -1;
   }
   var err = dx - dy;
   // pirmas koordinatas

   context.fillRect(x1,y1,1,1);
   while (!((x1 == x2) && (y1 == y2))) {
       var e2 = err << 1;
       if (e2 > -dy) {
           err -= dy;
           x1 += sx;
       }
       if (e2 < dx) {
           err += dx;
           y1 += sy;
       }
       context.fillRect(x1,y1,1,1);
   }
}

//array declr
var coords = []

function clickEventHandler(event){
    const canvas = document.getElementById('myCanvas');

    var context = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect()
    var x1 = event.clientX - rect.left
    var y1 = event.clientY - rect.top
    x1 = Math.floor(x1);
    y1 = Math.floor(y1);
    console.log("x1",x1,y1)

    coords.push([x1,y1]);

    for (let i = 0; i < coords.length; i++) {
        console.log(i + " element is " + coords[i]);
        if (i == 1) {
            
            x_viens = parseInt(coords[0][0]);
            y_viens = parseInt(coords[0][1]);
            x_divi = parseInt(coords[1][0]);
            y_divi = parseInt(coords[1][1]);

            var dx = Math.abs(x_divi - x_viens);
            var dy = Math.abs(y_divi - y_viens);

            if(x_viens < x_divi){
                var sx = 1;
            }
            else{
                var sx = -1;
            }

            if(y_viens < y_divi){
                sy = 1;
            }
            else{
                sy = -1;
            }
            var err = dx - dy;
            // pirmas koord
            context.fillRect(x_viens,y_viens,1,1);

            while (!((x_viens == x_divi) && (y_viens == y_divi))) {
                var e2 = err << 1;
                if (e2 > -dy) {
                    err -= dy;
                    x_viens += sx;
                }
                if (e2 < dx) {
                    err += dx;
                    y_viens += sy;
                }
                // iezime pixeli
                context.fillRect(x_viens,y_viens,1,1);
            }
            //reset array and break loop
            coords = [];
            break;
        }
    }

    console.log(coords)
}
