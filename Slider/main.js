const slideList = [{
        img: "images/img1.jpg",
        text: 'First picture'
    },
    {
        img: "images/img2.jpg",
        text: 'Second picture'
    },
    {
        img: "images/img3.jpg",
        text: 'Third picture'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

let time = 3000;
let active = 0;


const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
};

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

const left = () => {
    active--;
    if (active < 0) {
        active = slideList.length - 1;

    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
};



const keyChangeSlide = (e) => {

    if (e.keyCode === 39) {
        changeSlide();
        window.clearInterval(timer);
        timer = setInterval(changeSlide, time);
    } else if (e.keyCode === 37) {
        left();
        window.clearInterval(timer);
        timer = setInterval(changeSlide, time);

    };
    console.log(active);
};

let timer = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide);