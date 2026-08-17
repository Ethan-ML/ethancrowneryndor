document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.getElementById("custom-cursor");

    if (!cursor) return;


    /* ================================
       MOVER CURSOR
    ================================= */

    document.addEventListener("mousemove", (e) => {

        cursor.style.display = "block";

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        cursor.classList.remove("hidden");
    });


    /* ================================
       CAMBIAR CURSOR AL HACER HOVER
    ================================= */

    const clickableElements = document.querySelectorAll(`
        a,
        button,
        [role="button"],
        input[type="button"],
        input[type="submit"],
        input[type="reset"],
        label[for],
        select,
        summary,
        .clickable
    `);


    clickableElements.forEach(element => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });

    });


    /* ================================
       OCULTAR AL SALIR DE LA PÁGINA
    ================================= */

    document.addEventListener("mouseleave", () => {
        cursor.classList.add("hidden");
    });


    document.addEventListener("mouseenter", () => {
        cursor.classList.remove("hidden");
    });

});