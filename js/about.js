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

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;

		if (count < target) {
			
			counter.innerText = Math.ceil( count + inc);
		
			setTimeout(updateCount, 100);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

const counters1 = document.querySelectorAll('.counter1');
const speed1 = 20;

counters1.forEach(counter1 => {
	const updateCount = () => {
		const target = +counter1.getAttribute('data-target');
		const count = +counter1.innerText;
		const inc1 = target / speed;

		if (count < target) {
			
			counter1.innerText = Math.ceil( count + inc1);
		
			setTimeout(updateCount, 20);
		} else {
			counter1.innerText = target;
		}
	};

	updateCount();
});