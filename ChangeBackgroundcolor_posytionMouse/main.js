const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function (e) {

  h1.textContent = e.clientX + ", " + e.clientY;
  document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientX/2}, ${e.clientX / e.clientY * 20 })`;

  if (e.clientX < 500) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  };
});