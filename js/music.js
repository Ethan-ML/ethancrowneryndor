const music = document.getElementById("bgMusic");
const icon = document.getElementById("musicIcon");

if (music && icon) {

    // Estado guardado
    const savedTime = localStorage.getItem("musicTime");
    const isPlaying = localStorage.getItem("musicPlaying") === "true";

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Si estaba sonando
    if (isPlaying) {

        music.play().catch(() => {});

        icon.classList.add("playing");

    }

    // Guardar tiempo cada segundo
    setInterval(() => {

        localStorage.setItem("musicTime", music.currentTime);

    }, 1000);

    // Botón
    icon.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            icon.classList.add("playing");

            localStorage.setItem("musicPlaying", "true");

        } else {

            music.pause();

            icon.classList.remove("playing");

            localStorage.setItem("musicPlaying", "false");

        }

    });

    // Antes de salir de la página
    window.addEventListener("beforeunload", () => {

        localStorage.setItem("musicTime", music.currentTime);

    });

}