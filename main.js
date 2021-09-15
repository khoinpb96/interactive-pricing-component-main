const $ = document.querySelector.bind(document);
const slider = $("#slider");
const switchBtn = $("#switch");
let price = $(".price");

function discount() {
  if (switchBtn.checked) {
    price.innerHTML = Math.ceil((slider.value / 3) * 0.75);
  } else {
    price.innerHTML = Math.ceil(slider.value / 3);
  }
}

function progressBar() {
  slider.style.background = `linear-gradient(90deg, hsl(174, 86%, 45%) ${slider.value}%, hsl(224, 65%, 95%) ${slider.value}%)`;
  discount();
}

slider.oninput = progressBar;
switchBtn.onclick = discount;

console.log(switchBtn);
