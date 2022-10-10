console.clear();

// create bookmark button function -> change/toggle bookmark item color

const bookmarkButton = document.querySelector(
  '[data-js="bookmark-toggle-btn"]'
);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// create answer button function -> show / hide answer

const answerButton = document.querySelector('[data-js="button-show-answer"]');
const answerParagraph = document.querySelector('[data-js="card__answer"]');

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    answerParagraph.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  } else {
    answerParagraph.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  }
});
