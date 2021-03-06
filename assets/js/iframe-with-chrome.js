/**
 *
 * @param {Event} e
 */
const goHome = (e) => {
  const iframeWithChrome = /** @type {Element} */ e.currentTarget;
  if (iframeWithChrome === null || !(iframeWithChrome instanceof Element)) {
    console.log("there is no iframe??");
    return false;
  }
  const iframe = iframeWithChrome.querySelector("iframe");
  if (iframe === null) {
    console.log("there is no iframe?");
    return false;
  }
  iframe.src = iframe.dataset.home || "";
};

document.addEventListener("DOMContentLoaded", () => {
  const iframesWithChrome = document.querySelectorAll(".iframe-with-chrome");

  for (const element of iframesWithChrome) {
    element.addEventListener("click", goHome);
  }
});
