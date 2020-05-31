const btn = document.querySelector("button");
let number = 1;

const addElement = function () {

    const li = document.createElement("li");
    li.textContent = number;
    const list = document.querySelector("ul")
    if (number % 3 == 0) {
        li.classList.add('big');
    }
    list.appendChild(li);
    number = number + 2;

}



btn.addEventListener("click", addElement);