// OPEN WHEN LETTERS

const letters = {
    sad: {
        title: "When You're Sad ♡",
        text: "My love, I wish I could be right next to you and make everything better. Never forget how special you are, how much you mean to me, and how deeply you are loved. Whatever happens, you never have to face it alone. I'm always here for you. I love you, Dedee."
    },

    miss: {
        title: "When You Miss Me ♡",
        text: "If you're reading this, I probably wish I was next to you too. I miss your smile, your voice, your hugs, and all our little moments. Until I see you again, remember that you're always in my thoughts. Sending you the biggest hug and a million kisses."
    },

    happy: {
        title: "When You're Happy ✧",
        text: "I hope you always have reasons to smile like this. Your happiness means so much to me, and seeing you happy makes my whole day better. Keep smiling, keep shining, and never stop being the beautiful person you are. You deserve every beautiful thing in this world."
    },

    love: {
        title: "When You Need Love ♡",
        text: "Just a little reminder that someone loves you more than words can explain. I love your smile, your laugh, your personality, and every little thing that makes you YOU. You are my favorite person, my happiest thought, and someone I'll always be grateful for. I love you endlessly."
    }
};


// GET MODAL ELEMENTS

const modal = document.getElementById("letterModal");
const title = document.getElementById("letterTitle");
const text = document.getElementById("letterText");
const closeButton = document.getElementById("closeModal");


// OPEN LETTERS

document.querySelectorAll(".letter-card").forEach(button => {

    button.addEventListener("click", function () {

        const type = this.dataset.letter;

        if (!letters[type]) {
            return;
        }

        title.textContent = letters[type].title;
        text.textContent = letters[type].text;

        modal.classList.add("active");

    });

});


// CLOSE LETTER

function closeLetter() {
    modal.classList.remove("active");
}


// CLOSE BUTTON

closeButton.addEventListener("click", closeLetter);


// CLOSE WHEN CLICKING OUTSIDE

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        closeLetter();
    }

});


// CLOSE WITH ESCAPE KEY

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeLetter();
    }

});


// FLOATING HEARTS ANIMATION

function createHeart() {

    const heartsContainer = document.getElementById("hearts");

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (Math.random() * 15 + 12) + "px";

    heart.style.animationDuration = (Math.random() * 4 + 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 9000);

}


// CREATE HEARTS EVERY 900ms

setInterval(createHeart, 900);