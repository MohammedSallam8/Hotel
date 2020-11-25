let add = document.getElementById('addone');
let add1 = document.getElementById('addone1');
let add2 = document.getElementById('addone2');
let remove = document.getElementById('subone');
let remove1 = document.getElementById('subone1');
let remove2 = document.getElementById('subone2');
let int = document.getElementById('number');
let int1 = document.getElementById('number1');
let int2 = document.getElementById('number2');
let integer = 0;
let integer1 = 0;
let integer2 = 0;

add.addEventListener('click' , function(){
    integer +=1;
    int.innerHTML = integer;
})
add1.addEventListener('click' , function(){
    integer1 +=1;
    int1.innerHTML = integer1;
})
add2.addEventListener('click' , function(){
    integer2 +=1;
    int2.innerHTML = integer2;
})

remove.addEventListener('click' , function(){
    integer -=1;
    int.innerHTML = integer;
})
remove1.addEventListener('click' , function(){
    integer1 -=1;
    int1.innerHTML = integer1;
})
remove2.addEventListener('click' , function(){
    integer2 -=1;
    int2.innerHTML = integer2;
})
