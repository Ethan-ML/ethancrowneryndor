const container = document.getElementById("particles");

for(let i = 0; i < 80; i++){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDuration = (5 + Math.random() * 10) + "s";

    particle.style.animationDelay = (Math.random() * 5) + "s";

    particle.style.opacity = Math.random();

    container.appendChild(particle);

}
