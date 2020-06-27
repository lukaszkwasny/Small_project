const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnshowAdvice = document.querySelector(".showAdvice");
const btnshowOptions = document.querySelector(".showOptions");
let advice = ["Fight", "Think about it"];
const input = document.querySelector("input");
const h1 = document.querySelector("h1");


const add = (e) => {
    e.preventDefault();
    const newAdvice = input.value.toLocaleLowerCase().replace(/ /g, '');
    let boolean = advice.includes(newAdvice);
    if (boolean) {
        alert("Advice already exists")
    } else if (newAdvice == "") {
        alert("Replace input")
    } else {
        alert(`Add ${newAdvice}`);
        advice.push(newAdvice);

    };
    input.value = "";
};

const reset = (e) => {
    e.preventDefault();
    advice = [];
    alert(`Advice Clear`);
    input.value = "";
    h1.textContent = "";
};

const showAdvice = (e) => {
    e.preventDefault();
    const adviceValue = Math.floor(Math.random() * advice.length);
    h1.textContent = advice[adviceValue];

};

const showOptions = (e) => {
    e.preventDefault();
    const addTextToArray = advice.map(text => text + "! ");
    // or alert( adivice.joint("---"))


    if (advice.length <= 0) {
        alert("Options is empty. Add something")
    } else {
        alert(`Advice: ${addTextToArray}`);

    };
};


btnAdd.addEventListener("click", add);
btnClean.addEventListener("click", reset);
btnshowOptions.addEventListener("click", showOptions);
btnshowAdvice.addEventListener("click", showAdvice);