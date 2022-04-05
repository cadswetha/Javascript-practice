// var myVar = setInterval(move, 90);

// function move() {
//     var elem = document.getElementById("squareID"),
//         speed = 2,
//         currentPos = 0;
//     // Reset the element
//     elem.style.top = 0+"px";
//     elem.style.bottom = "auto";
//     var motionInterval = setInterval(function() {
//         currentPos += speed;
//         if (currentPos >= 200 && speed > 0) {
//            currentPos = 200;
//            speed = -2 * speed;
//         }
//         if (currentPos <= 0 && speed < 0) {
//            clearInterval(motionInterval);
//         }
//         elem.style.top = currentPos+"px";
//     },100);
// }

var item = document.getElementById('squareID');
item.animate([
    { transform: 'translateY(200px)' }
],{
    duration: 2000,
    easing:'linear',
    delay:10,
    iterations:Infinity,
    direction:"alternate",
    fill:"forwards"
});