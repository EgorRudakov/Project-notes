// получаем доступ к ....
const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
// const container2 = document.getElementsByClassName("container2")[0];
// const container3 = document.getElementsByClassName("container3")[0];
const checkIcon = document.getElementById("check-icon");
const xIcon = document.getElementById("x-icon");
const btn = document.getElementById("submit")


let i = 0;
// добавляем прослушиваетесь событий к button
btn.addEventListener('click', function() {
	//console.log('1')
	typeNote();
	btnTransform();
});

// добавляем прослушиваетесь событий к значкам
xIcon.addEventListener("click", function() {
	typeNote();
});

checkIcon.addEventListener('click', function() {
	createNote();
});


//-------------------------------------
// если container3 display:none то включи display  block
function typeNote() {
	if(container3.style.display == "none") {
		container3.style.display = "block";
	} else {
		container3.style.display = "none";
	}
	
}




function createNote() {
	// получаем значение заметки
	let noteText = document.getElementById("note-text").value;
	let node0 = document.createElement("div");
	let node1 = document.createElement("h1");

	node1.innerHTML = noteText;

	node1.setAttribute("style", "width:250px; height:250px; fonts-size:26px; padding:10px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0.75); text-align: center ");

	node1.style.margin = margin();
	node1.style.transform = rotate();
	node1.style.background = color();
	//Node0.appendChild() добавляет узел в конец списка дочерних элементов указанного родительского узла
	node0.appendChild(node1);
	//Метод insertAdjacentElement() добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод. beforebegin': перед самим элементом
	container2.insertAdjacentElement("beforeend", node0);

	node0.addEventListener("mouseenter", function() {
		node0.style.transform = "scale(1.1)";
	})

	node0.addEventListener("mouseleave", function() {
		node0.style.transform = "scale(1)";//Масштабирует элемент в двумерном пространстве
	})

	node0.addEventListener("dblclick", function() {
		node0.remove();
	})
	
	document.getElementById("note-text").value = '';
}

function margin() {
	let random_margin = ['-5px','1px','5px','10px','15px','20px'];

	return random_margin[Math.floor(Math.random() * random_margin.length)];
}

// лис будет появляться в разном положении
//Метод Math.floor() - Округляет аргумент до ближайшего меньшего целого.
function rotate() {
	let random_rotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];

	return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
	let random_color = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];

	if (i > random_color.length - 1) {
		i = 0;
	}

	return random_color[i++];
}

// кнопка при нажатии сдвинется в центр

function btnTransform() {
	//console.log('3');
	btn.style.transform = 'translateX(707px)';
	btn.style.transition = 'transform 1s ease-in-out'
}

