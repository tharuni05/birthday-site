let pics = ["img1.jpg","img2.jpg","img3.jpg"];
let i = 0;

setInterval(() => {
    i = (i + 1) % pics.length;
    document.getElementById("photo").src = pics[i];
}, 3000);

// Confetti generator
const confetti = document.getElementById("confetti");

for (let x = 0; x < 40; x++) {
    let d = document.createElement("div");
    d.classList.add("dot");
    d.style.left = Math.random() * 100 + "vw";
    d.style.background = ["red","yellow","blue","pink","green"][x%5];
    d.style.animationDelay = Math.random() * 3 + "s";
    confetti.appendChild(d);
}
