console.log("js working");

// get js and ny talking

console.log();

//collapse button toggle

const dropDownButton = document.querySelector(".btn_collapsable");
const contentToShow = document.querySelector(".btn_collapsable_inside");

dropDownButton.addEventListener("click", (showFn) => {
  if (contentToShow.style.display === "block") {
    contentToShow.style.display = "none";
    // contentToShow.style.maxHeight = null;
  } else {
    contentToShow.style.display = "block";
    // contentToShow.style.maxHeight = contentToShow.scrollHeight + "px";
  }
  console.log("fornite battlepass");
});
