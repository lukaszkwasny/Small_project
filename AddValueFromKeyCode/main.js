let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  // 38 - ArrowUp
  // 40 - ArrowDowd

  if (e.keyCode == 38 && red < 255) {
    red = red + 5;
    green = green + 5;
    blue = blue + 5;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  } else if (e.keyCode == 40 && red >= 0) {
    if (red > 0) {
      red -= 5;
      green -= 5;
      blue -= 5;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
  };

  const div = document.querySelector("div");
  div.innerHTML = `rgb(${red}, ${green}, ${blue})`;
  const h1 = document.querySelector("h1");

  if (red < 80 && green < 80 && blue < 80) {
    div.style.color = "white";
    h1.style.color = "white";
  } else {
    div.style.color = "black";
    h1.style.color = "black";
  };
};

// switch (e.keyCode) {
//   case 38:
//     document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red }, ${green <= 255 ? ++green : green}, ${blue <= 255 ? ++blue : blue})`;
//     break;
//   case 40:
//     document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red }, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
//     break;

// }



window.addEventListener('keydown', changeColor);