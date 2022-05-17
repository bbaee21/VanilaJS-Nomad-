const images = [
  "삼성.jpg",
  "포스코(발표).png",
  "흰배경.png"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);