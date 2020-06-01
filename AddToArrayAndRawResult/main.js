const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnshowAdvice = document.querySelector(".showAdvice");
const btnshowOptions = document.querySelector(".showOptions");
let advice = ["Fight", "think about it"];


const add = (e) => {
    e.preventDefault();

    const input = document.querySelector("input");
    const newAdvice = input.value;
    if (input.value == "") {
        alert("Replace input")
    } else {
        alert(`Add ${newAdvice}`);
        advice.push(newAdvice);
        console.log(advice);
    };
};

const reset = (e) => {
    e.preventDefault();
    advice = [];
    console.log(advice);

};

const showAdvice = (e) => {
    e.preventDefault();
    const h1 = document.querySelector("h1");
    const adviceValue = Math.floor(Math.random() * advice.length);
    h1.textContent = advice[adviceValue];

};

const showOptions = (e) => {
    e.preventDefault();
    const costam = advice.map(text => text + "! ")


    if (advice.length <= 0) {
        alert("Options is empty. Add something")
    } else {
        alert(`Advice: ${costam}`);
    };
};


btnAdd.addEventListener("click", add);
btnClean.addEventListener("click", reset);
btnshowOptions.addEventListener("click", showOptions);
btnshowAdvice.addEventListener("click", showAdvice);