const btn = document.querySelector("button");
const btnReset = document.getElementById("reset");
let number = 1;
const input = document.getElementById("startNumber");
var max = document.getElementById("startNumber").max;

const starNumber = () => {

    let inputValue = document.querySelector("input").value;
    number = inputValue;
    console.log(inputValue);

};



const addElement = () => {

    const div = document.createElement("div");
    div.textContent = number;
    if (number % 5 == 0) {
        div.classList.add('circle');
    }
    document.body.appendChild(div);

    number++;

    input.style.visibility = "hidden";

    if (div.textContent == max) {
        btn.style.visibility = "hidden";
    };
}

const reset = () => {
    const allDiv = document.querySelectorAll("div");


    for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].remove();
    };
    number = 1;
    input.style.visibility = "visible";
    btn.style.visibility = "visible";
    input.value = "1";
};





btn.addEventListener("click", addElement);
btnReset.addEventListener("click", reset);
input.addEventListener("change", starNumber);