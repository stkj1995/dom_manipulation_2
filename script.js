//Write your own code here

//DON'T touch any other files!

// Opgave 1: Fjern alle break tags
function solution1() {
  const allBreaks = document.querySelectorAll("br");
  allBreaks.forEach((br) => {
    br.remove();
  });
}

// Opgave 2: Giv alle sektioner klassen 'filled'
function solution2() {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((section) => {
    section.classList.add("filled");
  });
}

// Opgave 3: Fjern alle elementer, der kommer før en sektion
function solution3() {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((section) => {
    let currentElement = section.previousElementSibling;
    while (currentElement) {
      currentElement.remove();
      currentElement = currentElement.previousElementSibling;
    }
  });
}

// Kør løsningerne efter DOM'en er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // Kald løsningerne her:
  solution1();
  solution2();
  solution3();
});
