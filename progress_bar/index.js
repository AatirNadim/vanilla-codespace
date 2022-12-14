const scrollBar = document.querySelector('.progress__bar');
const getProgress = () => {
    const tempHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percent = (scrolled/(fullHeight - tempHeight)) *100;
    scrollBar.style.width = percent*10/11 + '%';
}

window.addEventListener('scroll', getProgress);
