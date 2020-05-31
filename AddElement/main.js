let size = 10;
let orderElement = 0;

const init = window.onload = () => {

    let button = document.createElement("button");
    let reset = document.createElement("button");
    let ulList = document.createElement("ul");

    button.innerHTML = "Add 10 elemnts";
    reset.innerHTML = "Reset";
    button.style.fontSize = "30px";
    reset.style.fontSize = "30px";
    document.body.appendChild(button);
    document.body.appendChild(reset);
    document.body.appendChild(ulList);
    button.addEventListener('click', createLiElements);
    reset.addEventListener('click', clear);

};

let createLiElements = () => {
    // tutaj kod

    for (let i = 0; i < 10; i++) {
        const liList = document.createElement('li');
        // liList.textContent = "Element nr: " + orderElement;
        // orderElement++;
        liList.textContent = `Element nr ${orderElement++}`;
        liList.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(liList);;
        liList.id = "order";

    };
};

let clear = () => {

    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 0;
}