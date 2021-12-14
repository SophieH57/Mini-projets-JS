const yeux = document.querySelectorAll('.pupille');
const body = document.querySelector('body');


body.addEventListener("mousemove", e => {
    const X = `${e.clientX * 100 / window.innerWidth}%`
    const Y = `${e.clientY * 100 / window.innerHeight}%`

    for (let i = 0; i < 2; i++) {
        yeux[i].style.top = Y;
        yeux[i].style.left = X;
        yeux[i].style.transform = `translate(-${X}, -${Y})`;
    }
});
