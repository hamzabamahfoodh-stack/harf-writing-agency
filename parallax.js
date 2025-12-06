document.addEventListener("mousemove", (e) => {
    const layer = document.querySelector("[data-parallax]");
    const speed = 15;

    const x = (window.innerWidth / 2 - e.pageX) / speed;
    const y = (window.innerHeight / 2 - e.pageY) / speed;

    layer.style.transform = `translate(${x}px, ${y}px)`;
});
