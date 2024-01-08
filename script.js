const navMenu = document.querySelector("#navMenu");

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
    document.querySelector(".description").scrollIntoView({ behavior: 'smooth' });
})