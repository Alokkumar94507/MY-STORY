function openLetter() {

    const hero = document.querySelector(".hero");
    const letter = document.getElementById("letter");

    hero.style.display = "none";

    letter.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function sayYes() {

    const letter = document.getElementById("letter");
    const finalMessage = document.getElementById("finalMessage");

    letter.style.display = "none";

    finalMessage.style.display = "flex";

    createHearts();

}


function moveNoButton() {

    const noButton = document.getElementById("noButton");

    const x = Math.random() * 250 - 125;

    const y = Math.random() * 150 - 75;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

}


function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.top = Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 35) + "px";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            "heartbeat 1s infinite";

        document.body.appendChild(heart);

    }

}