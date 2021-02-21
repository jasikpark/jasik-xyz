/**
 *
 * @param {Event} e
 */
const goHome = (e) => {
  const iframeWithChrome = e.currentTarget;
  if (iframeWithChrome === null) {
    console.log("there is no iframe??");
    return false;
  }
  const iframe = iframeWithChrome.querySelector("iframe");
  iframe.src = iframe.dataset.home;
};

document.addEventListener("DOMContentLoaded", () => {
  const iframesWithChrome = document.querySelectorAll(".iframe-with-chrome");

  for (const element of iframesWithChrome) {
    element.addEventListener("click", goHome);
  }
});
