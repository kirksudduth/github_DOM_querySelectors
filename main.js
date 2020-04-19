const section_one = (document.querySelector(".article__header").textContent =
  "Welcome to the Kirk Sudduth blog!");

const add_class = document.querySelectorAll(".article__header");

console.log(add_class);

for (i = 0; i < add_class.length; i++) {
  add_class[i].classList.add("important");
}

const dashed = document.querySelectorAll(".dashed");

console.log(dashed);

for (i = 0; i < dashed.length; i++) {
  dashed[i].classList.remove("dashed");
}
