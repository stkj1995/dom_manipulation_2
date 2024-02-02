//Write your own code here

//DON'T touch any other files!

// Solution for task 1: Remove all break tags
function solution1() {
  const allBreaks = document.querySelectorAll("br");
  allBreaks.forEach((breakTag) => {
    breakTag.remove();
  });
}

// Solution for task 2: Give all sections the class 'filled'
function solution2() {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((section) => {
    section.classList.add("filled");
  });
}

// Solution for task 3: Remove all elements that come before a section
function solution3() {
  const allSections = document.querySelectorAll("section");

  allSections.forEach((section) => {
    let currentElement = section.previousElementSibling;
    while (currentElement) {
      const nextElement = currentElement.previousElementSibling;
      currentElement.remove();
      currentElement = nextElement;
    }
  });
}

// Uncomment the lines below to run the solutions
solution1();
solution2();
solution3();
