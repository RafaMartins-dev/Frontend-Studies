document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    let accCollapse = item.nextElementSibling;

    // Open accordion item
    if (!item.classList.contains("open")) {
      // Remove "collapse", add "collapsing" class to .accordion__collapse (sibling)
      accCollapse.style.display = "block";
      let accHeight = accCollapse.clientHeight;

      setTimeout(() => {
        accCollapse.style.height = accHeight + "px";
        accCollapse.style.display = "";
      }, 1);

      accCollapse.classList = "accordion__collapse collapsing";

      // After X amount of time, Remove "collapsing" class and add "collapse open" class
      setTimeout(() => {
        accCollapse.classList = "accordion__collapse collapse open";
      }, 300);
    }
    // Close accordion item
    else {
      // Remove "collapse open" from .accordion__collapse, add "collapsing"
      accCollapse.classList = "accordion__collapse collapsing";

      setTimeout(() => {
        accCollapse.style.height = "0px";
      }, 1);

      // After X amount of time, remove "collapsing" class and add "collapse" class
      setTimeout(() => {
        accCollapse.classList = "accordion__collapse collapse";
        accCollapse.style.height = "";
      }, 300);
    }

    item.classList.toggle("open");
  });
});
