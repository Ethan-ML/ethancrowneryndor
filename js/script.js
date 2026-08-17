// ===========================
// ERYNDOR - SCRIPT.JS
// ===========================

const tooltip = document.getElementById("tooltip");
const title = document.getElementById("tooltip-title");
const desc = document.getElementById("tooltip-desc");

const regions = document.querySelectorAll(".region");

regions.forEach(region => {

    const label = document.querySelector("." + region.classList[1] + "-label");

    // Hover
    region.addEventListener("mouseenter", () => {

        tooltip.style.display = "block";

        title.textContent = region.dataset.title;
        desc.textContent = region.dataset.desc;

        if (label) {

            label.style.color = "#f3f3f398";

            label.style.textShadow =
                "0 0 10px #FFD700, 0 0 20px #6d5d05, 0 0 40px #FFD700";

        }

    });

    // Salir del hover
    region.addEventListener("mouseleave", () => {

        tooltip.style.display = "none";

        // Solo quitar el brillo si NO está seleccionada
        if (label && !label.classList.contains("active")) {

            label.style.color = "white";

            label.style.textShadow =
                "0 0 6px black, 0 0 12px black";

        }

    });

    // Mover tooltip
    region.addEventListener("mousemove", (e) => {

        tooltip.style.left = (e.pageX + 20) + "px";
        tooltip.style.top = (e.pageY + 20) + "px";

    });

    // CLICK
    region.addEventListener("click", (e) => {

        e.preventDefault();

        // Quitar selección anterior
        document.querySelectorAll(".label").forEach(l => {

            l.classList.remove("active");

            l.style.color = "white";

            l.style.textShadow =
                "0 0 6px black, 0 0 12px black";

        });

        // Activar esta
        if (label) {

            label.classList.add("active");

        }

        // Esperar para que se vea la animación
        setTimeout(() => {

            window.location.href = region.href;

        }, 700);

    });

});
