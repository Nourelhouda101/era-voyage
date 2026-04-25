document.querySelector(".card-1").onclick = () => {
    document.getElementById("popup1").style.display = "flex";
};

document.querySelector(".card-2").onclick = () => {
    document.getElementById("popup2").style.display = "flex";
};

document.querySelector(".card-3").onclick = () => {
    document.getElementById("popup3").style.display = "flex";
};

document.querySelector(".card-4").onclick = () => {
    document.getElementById("popup4").style.display = "flex";
};

document.querySelectorAll(".close").forEach(btn => {
    btn.onclick = () => {
        btn.closest(".popup").style.display = "none";
    };
});

// The Story Reader
function toggleAudio() {
    const icon = document.querySelector(".ai-reader");
    const audio = document.getElementById("story-audio");
    if (!audio.src) {
        audio.src = "media/story.mp3";
    }

    audio.onended = function () {
        icon.textContent = "🕪";
    };

    if (audio.paused) {
        audio.play();
        icon.textContent = "⏸";
    } else {
        audio.pause();
        icon.textContent = "🕪";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const section3 = document.querySelector(".section-3");
    const cards = document.querySelectorAll(".glass-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("active");
                    }, index * 200);
                });

            } else {
                cards.forEach(card => {
                    card.classList.remove("active");
                });
            }
        });
    }, {
        threshold: 0.5
    });
    observer.observe(section3);
});