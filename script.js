//Ai generated//

let human = document.querySelector('.human');
let angleX = 0;
let angleY = 0;

function rotateHuman() {
    angleX += 1;
    angleY += 1;
    human.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    requestAnimationFrame(rotateHuman);
}
rotateHuman();
