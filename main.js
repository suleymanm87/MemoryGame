//Copyright Code written by Suleyman Mulayim//

var imageArray = ["/images/BirdPorcelaine-icon.png", "/images/BirdPorcelaine-icon.png",
	"/images/BearPorcelaine-icon.png", "/images/BearPorcelaine-icon.png",
	"/images/CowBlackPorcelaine-icon.png", "/images/CowBlackPorcelaine-icon.png",
	"/images/CowBrownaPorcelaine-icon.png", "/images/CowBrownaPorcelaine-icon.png",
	"/images/DogPorcelaine-icon.png", "/images/DogPorcelaine-icon.png",
	"/images/ElephantPorcelaine-icon.png", "/images/ElephantPorcelaine-icon.png",
	"/images/BullPorcelaine-icon.png", "/images/BullPorcelaine-icon.png",
	"/images/FrogPorcelaine-icon.png", "/images/FrogPorcelaine-icon.png",
	"/images/GiraffePorcelain-icon.png", "/images/GiraffePorcelain-icon.png",
	"/images/HippoPorcelain-icon.png", "/images/HippoPorcelain-icon.png",
	"/images/PandaPorcelaine-icon.png", "/images/PandaPorcelaine-icon.png",
	"/images/PenguinePorcelaine-icon.png", "/images/PenguinePorcelaine-icon.png",
	"/images/PigPorcelaine-icon.png", "/images/PigPorcelaine-icon.png",
	"/images/PinkCowPorcelaine-icon.png", "/images/PinkCowPorcelaine-icon.png",
	"/images/PlatipusPorcelain-icon.png", "/images/PlatipusPorcelain-icon.png",
	"images/RabbidPorcelaine-icon.png", "images/RabbidPorcelaine-icon.png",
	"/images/SheepPorcelaine-icon.png", "/images/SheepPorcelaine-icon.png",
	"/images/StarfishPorcelaine-icon.png", "/images/StarfishPorcelaine-icon.png"
];

var opened = [];

function randomShuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
var boxes = document.getElementsByClassName("boxes");
for (let i = 0; i < boxes.length; i++) {
	boxes[i].onclick = function () {
		boxes[i].firstElementChild.classList.add("hideImg")
		boxes[i].style.pointerEvents = "none"
		opened.push(boxes[i]);

		fcompareCards()
	}
}

function fDeckCards() {
	const newArray = randomShuffle(imageArray)
	for (let index = 0; index < boxes.length; index++) {
		boxes[index].lastElementChild.src = newArray[index];
	}
}



function match() {
	var matchedImg = []
		matchedImg[0] = opened[0].lastElementChild
		matchedImg[1] = opened[1].lastElementChild
		matchedImg[0].classList.add("match")
		matchedImg[1].classList.add("match")
		document.body.style.pointerEvents = "auto";
		opened = [];
}



function noMatch() {
	var defaultImg = []
	defaultImg[0] = opened[0].firstElementChild
	defaultImg[1] = opened[1].firstElementChild
	opened[0].lastElementChild.classList.add("notmatch")
	opened[1].lastElementChild.classList.add("notmatch")
	

	setTimeout(function () {
		defaultImg[0].classList.remove('hideImg');
		defaultImg[1].classList.remove('hideImg');
		opened[0].style.pointerEvents = "auto";
		opened[1].style.pointerEvents = "auto";
		document.body.style.pointerEvents = "auto";
		opened = []

	}, 2000);
}

function fcompareCards() {
	if (opened.length === 2) {
		document.body.style.pointerEvents = "none";
	}
	if (opened.length === 2 && opened[0].lastElementChild.src === opened[1].lastElementChild.src) {
		match();
	} else if (opened.length === 2 && opened[0].lastElementChild.src != opened[1].lastElementChild.src) {
		noMatch();
	}
}
