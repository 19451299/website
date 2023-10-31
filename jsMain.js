console.log("js working");

// get js and ny talking

console.log();

// shoelace active event

const slCarouselItemActive = this.ShadowRoot.document.querySelector(
  ".sl_carouselBIG_item"
);

console.log(slCarouselItemActive);

slCarouselItemActive.addEventListener("sl-slide-change", (ev) => {
  console.log(ev);
});
