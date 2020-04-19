//  /Use JavaScript to obtain a reference to the first section with the class of
// article_header and change its text with the textContent property to "Welcome to
// the {insert your name here} blog"/
const section_one = (document.querySelector(".article__header").textContent =
  "Welcome to the Kirk Sudduth blog!");

// Use JavaScript to obtain a reference to all article__header elements
// and change their classList property value to article__header important.
const add_class = document.querySelectorAll(".article__header");

console.log(add_class);

for (i = 0; i < add_class.length; i++) {
  add_class[i].classList.add("important");
}

// Obtain a reference the element with a class of dashed and remove it.
const dashed = document.querySelectorAll(".dashed");

console.log(dashed);

for (i = 0; i < dashed.length; i++) {
  dashed[i].classList.remove("dashed");
}
// Obtain a reference the element with a class of article__footer
// and add the class of goldenrod it.
const footer_class = document.querySelector(".article__footer");
footer_class.classList.add("goldenrod");
