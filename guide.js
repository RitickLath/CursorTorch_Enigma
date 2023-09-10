const torch = document.querySelector(".torch");
const inner = document.querySelector(".inner");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const size = document.querySelector(".inner");
const content = document.querySelector(".content");
const brightness = document.querySelector(".brightness");
let light = 0;
const colorShades = [
  "#d4c25a",
  "#ddd170",
  "#e5d681",
  "#eedc91",
  "#f6e3a1",
  "#fdefb1",
  "#fff5c2",
  "#fffbc8",
  "#ffffd3",
  "#ffffff",
];

const data =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae iure doloribus. Neque quasi quae similique. Odit esse hic itaque voluptatem aliquam. Soluta sequi, sint doloribus iusto mollitia eaque? Ipsum.";
let initial = 60;

const p = document.createElement("p");
p.textContent = `${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data} ${data}`;
content.appendChild(p);

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  torch.style.left = `${x}px`;
  torch.style.top = `${y}px`;
});

add.addEventListener("click", function () {
  if (initial === 200) {
    return;
  }

  size.style.width = `${initial + 10}px`;
  size.style.height = `${initial + 10}px`;
  initial = initial + 10;
});

sub.addEventListener("click", function () {
  if (initial === 30) {
    return;
  }
  size.style.width = `${initial - 10}px`;
  size.style.height = `${initial - 10}px`;
  initial = initial - 10;
});

brightness.addEventListener("click", function () {
  if (light === 9) {
    light = 0;
  }
  inner.style.backgroundColor = `${colorShades[light++]}`;
});

