/**
 * @returns {string} clock - the emoji that represents the current time
 */
function getEmojiClock() {
  // updated Date -> emoji from https://css-tricks.com/how-to-create-a-favicon-that-changes-automatically/
  const time = new Date(Date.now() + 15 * 60 * 1000);
  const nearest_hour = time.getHours() % 12;
  const this_many_past = time.getMinutes() < 30 ? 0 : 30;

  let base_code_point = "0x1F5";
  if (this_many_past == 0) {
    // then it is the top of the hour
    const start = 0x4f;
    let clock = String.fromCodePoint(
      parseInt(base_code_point + (start + nearest_hour).toString(16), 16)
    );

    return clock;
  } else {
    // or it is half past the hour
    const start = 0x5b;
    let clock = String.fromCodePoint(
      parseInt(base_code_point + (start + nearest_hour).toString(16), 16)
    );

    return clock;
  }
  // So the emoji count from 1 (o'clock / thirty) to 12 (o'clock / thirty) and
  // so we need the start to be the zero index so when we add the hour it is correctly indexed.
}

/**
 * Sets the icon link to the emoji clock
 * @param {HTMLLinkElement} link
 */
function generateIcon(link) {
  const padding = (100 / 16).toString();
  const emoji = getEmojiClock();

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const t1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t1.setAttribute("y", ".875em");
  t1.setAttribute("font-size", "100");
  t1.setAttribute("padding", padding);
  t1.textContent = emoji;
  svg.appendChild(t1);

  link.href = "data:image/svg+xml," + svg.outerHTML.replace(/"/gi, "%22");
}

function initEmojiClock() {
  const link = document.getElementById("emoji-clock");
  if (link === null) {
    console.log("emoji-clock link doesn't exist...");
    return;
  }
  if (!(link instanceof HTMLLinkElement)) {
    console.log("emoji-clock isn't a link element...");
    return;
  }
  generateIcon(link);
  // update every 15minutes
  setTimeout(generateIcon, 1000 * 60 * 15, link);
}

/**
 * Get the greeting based on time
 * @param {number} now - Hour of day
 * @return {String} - The greeting
 */
const getGreeting = function (now) {
  if (now > 20 || now < 4) return "Good night! 🌙"; // If it's after 8pm / If it's before 4am
  if (now > 17) return "Good evening! 🌅"; // If it's after 5pm
  if (now > 11) return "Good afternoon! 🌇"; // If it's after noon
  return "Good morning! 🌞"; // Default message
};

/**
 * Adjust the color theme based on time
 * @param {number} now - Hour of day
 */
const adjustColorMode = function (now) {
  // Remove any existing classes
  document.documentElement.classList.remove("transitional");
  document.documentElement.classList.remove("night");

  // If it's nighttime, go dark mode (8pm to 4am)
  if (now > 20 || now < 4) {
    document.documentElement.classList.add("night");
    return;
  }

  // If it's morning or evening, go transitional (4am to 11am and 5pm to 8pm)
  if (now > 17 || now < 11) {
    document.documentElement.classList.add("transitional");
  }
};

/**
 * @returns {HTMLElement}
 */
const getGreetingElement = () => {
  let greeting = document.getElementById("greeting");
  if (!(greeting instanceof HTMLElement)) {
    console.log("the greeting element might not exist");
    return getGreetingElement();
  }
  return greeting;
};

function initGreeting() {
  const greeting = getGreetingElement();
  let now = new Date().getHours();

  // Update Greeting on page load
  window.requestAnimationFrame(() => {
    greeting.textContent = getGreeting(now);
  });

  // Check again every 15 minutes
  setInterval(function () {
    let now = new Date().getHours();
    window.requestAnimationFrame(() => {
      greeting.textContent = getGreeting(now);
    });
  }, 1000 * 60 * 15);
}

function initTheme() {
  let now = new Date().getHours();

  // Update the Theme before page load
  window.requestAnimationFrame(() => adjustColorMode(now));

  // Check again every 15 minutes
  setInterval(function () {
    let now = new Date().getHours();
    window.requestAnimationFrame(() => adjustColorMode(now));
  }, 1000 * 60 * 15);
}

window.addEventListener("DOMContentLoaded", initEmojiClock);
window.addEventListener("DOMContentLoaded", initGreeting);
initTheme();
