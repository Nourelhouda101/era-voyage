document.querySelectorAll(".card").forEach((card, i) => {
    card.addEventListener("click", () => {
        document.getElementById(`popup${i+1}`).style.display = "flex";
    });
});

document.querySelectorAll(".close").forEach(btn => {
    btn.onclick = () => {
        btn.closest(".popup").style.display = "none";
    };
});

function toggleAudio(icon) {
    const audio = document.getElementById("brief-audio");

    if (audio.paused) {
        audio.play();
        icon.textContent = "⏹️";
    } else {
        audio.pause();
        audio.currentTime = 0;
        icon.textContent = "🕪";
    }
}