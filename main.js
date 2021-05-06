
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas= document.getElementById ("myCanvas");

canvas = 
document.getElementById("mycanvas")
ctx= canvas.getContext ("2d");
color= "black";
width= 1;
radius= 20;

canvas.addEventListener ("mousedown",my_mousedown);

function my_mousedown(e) {
    color= document.getElementById ("color").value;
    width= document.getElementById ("width").value;
    radius= document.getElementById("radius").value;
    mouseEvent= "mousedown";

}

canvas.addEventListener ("mouseup",my_mouseup);

function my_mouseup (e) {
    mouseEvent= "mouseup";

} 

canvas.addEventListener ("mouseleave",my_mouseleave);

function my_mouseleave (e) {
    mouseEvent= "mouseleave";

} 

canvas.addEventListener ("mousemove",my_mousemove);

function my_mousemove (e) {
    current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y)
        console.log ("last position of x and y coordinates are");
        console.log ("X=" + last_position_of_x + " y= " + last_position_of_y, radius ,0, 2* Math.PI);
        ctx.moveTo (last_position_of_x, last_position_of_y);

        console.log ("current position of x and y coordinates are");
        console.log ("X=" + current_position_of_mouse_x + " y= " + current_position_of_mouse_y);
        ctx.lineTo (current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_y= current_position_of_mouse_y;
    last_position_of_x= current_position_of_mouse_x;
}

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}



