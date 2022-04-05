// considering add, sort buttons and the list elements are also considered

// buttons
var addno = document.getElementById('add');
var sortbtn = document.getElementById('sort');

// list elements
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');

// on clicking add button , generates random numbers and stored in each li item using innerHTML
addno.onclick = function(){
    box1.innerHTML =  Math.floor(Math.random() * (10 - 0)) + 0;
    box2.innerHTML =  Math.floor(Math.random() * (10 - 0)) + 0;
    box3.innerHTML =  Math.floor(Math.random() * (10 - 0)) + 0;
    box4.innerHTML =  Math.floor(Math.random() * (10 - 0)) + 0;
}

// on clicking sort button , the values in each li element is taken and pushed in a list[] and then sorted
// then using the sorted list[] , innerHTML is updated

sortbtn.onclick = function(){
    numbers_list = [];
    numbers_list.push(box1.innerHTML);
    numbers_list.push(box2.innerHTML);
    numbers_list.push(box3.innerHTML);
    numbers_list.push(box4.innerHTML);
    numbers_list.sort(function(a, b){return a-b});
    box1.innerHTML = numbers_list[0];
    box2.innerHTML = numbers_list[1];
    box3.innerHTML = numbers_list[2];
    box4.innerHTML = numbers_list[3];
}