console.log("js working");

// get js and ny talking

// from window.customElements.define('shoelace-tree-wc ???', WebComponent);, so I cant get the shoelace component shadowroot so I can add a class to an element inside the shadowroot to add autoscroll dropdown to the button div that's inside it.
// WILL NOT WORK BC CANT FIND SHOELACE TREE-ITEM COMPONENT NAME in files
// customElements.whenDefined("shoelace-tree-wc").then(() => {
//   let shadowRootVar = document.querySelector("jsAutoScrollDown").shadowRoot;
//   console.log(shadowRootVar.shadowRoot);
// });

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

// autoscroll down function

// const scrollDownArr = document
//   .querySelector(".jsAutoScrollDown")
//   .shadowRoot.querySelector(".tree-item");
// .querySelector(div[(part = "expand-button")]);

// I did all I could to add this ".jsAutoScrollDown" class to the shoelace drop down arrow div of the sl-tree-item element in it's shadowRoot, but I cannot access the shadowRoot in javascript without knowing what the component name is to only define variables until after it has loaded. .shadowRoot is returning nul because the mainJs script has executed before the webcomponent has.
// so instead (even though it doesnt work because that's not where you are clicking), I will add this class to the exposed container.
const scrollDownArr = document.querySelectorAll(".jsAutoScrollDown");

for (i = 0; i < scrollDownArr.length; i++) {
  scrollDownArr[i].addEventListener("click", autoScrollFn);
}

function autoScrollFn() {
  // dropdown autoscroll
  const scrollToWhere = document.querySelector(".f_footer_bb");
  scrollToWhere.scrollIntoView();
  // scrollToWhere.scroll({ top: scrollToWhere.scrollHeight, behavior: "smooth"
}
