import 'animate.css';
import './style.css';
import gogsimg from './goggles-png.png';

document.querySelector('#app').innerHTML = `
	<div id="cursor" class="flex-center">
		<span id="cursor-span"></span>
		<span id="cursor-span"></span>
		<span id="cursor-span"></span>
		<span id="cursor-span"></span>
	</div>
	<p id="point">Points: 0</p>
	<label for="checkbox" id="checkboxlabel">
		<input type="checkbox" id="autoplay" />
		Autoplay ( no points, background changing )
	</label>
	<button class="randomized animate__animated">
		<img src="${gogsimg}" alt="Goggles" width="100" height="100" />
	</button>
`;

const cursorel = document.querySelector('#cursor');
const button = document.querySelector('.randomized');
const pointDisplay = document.querySelector('#point');
const autoplaycheckbox = document.querySelector('#autoplay');
let autoplay;

document.onmousemove = (e) => {
	const mouseX = e.clientX - (cursorel.clientWidth / 2);
	const mouseY = e.clientY - (cursorel.clientHeight / 2);
	const percentageX = mouseX / window.innerWidth * 100;
	const percentageY = mouseY / window.innerHeight * 100;
	cursorel.style.left = `${percentageX}%`;
	cursorel.style.top = `${percentageY}%`;
};

button.addEventListener('click', onClick);

autoplaycheckbox.onchange = () => {
	if (!autoplaycheckbox.checked) {
		clearInterval(autoplay);
		return;
	};
	autoplay = setInterval(() => { onClick(false); }, 1000);
};

function onClick (update) {
	let posX = parseInt(parseInt(Math.random() * window.innerWidth) / window.innerWidth * 100);
	let posY = parseInt(parseInt(Math.random() * window.innerHeight) / window.innerHeight * 100);
	if (posX > 90) {
		posX -= 10;
	} else if (posX < 10) {
		posX += 10;
	}
	if (posY > 90) {
		posY -= 10;
	} else if (posY < 10) {
		posY += 10;
	}
	button.classList.toggle('animate__flash', true);
	setTimeout(() => { button.classList.toggle('animate__flash', false); }, 1500);
	button.style.left = `${posX}%`;
	button.style.top = `${posY}%`;
	if (update === false) return;
	RGBGen();
	updatePoint();
}

function RGBGen () {
	const r = parseInt(Math.random() * 255);
	const g = parseInt(Math.random() * 255);
	const b = parseInt(Math.random() * 255);
	const rgb = [r, g, b].join(', ');
	document.body.style.backgroundColor = `rgb(${rgb})`;
}

let point = -1;
function updatePoint () {
	point++;
	const pointstr = `Points: ${point}`;
	pointDisplay.innerText = pointstr;
}

onClick();
RGBGen();
