const button_link = document.querySelector('.button_main');
button_link.addEventListener('click', (eve) => {
    const x = eve.pageX, y = eve.pageY;
    const buttonTop = eve.target.offsetTop;
    const buttonLeft = eve.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 500)
})