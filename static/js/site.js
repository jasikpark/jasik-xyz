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
      base_code_point + (start + nearest_hour).toString(16)
    );

    return clock;
  } else {
    // or it is half past the hour
    const start = 0x5b;
    let clock = String.fromCodePoint(
      base_code_point + (start + nearest_hour).toString(16)
    );

    return clock;
  }
  // So the emoji count from 1 (o'clock / thirty) to 12 (o'clock / thirty) and
  // so we need the start to be the zero index so when we add the hour it is correctly indexed.
}

function initEmojiClock() {
  const link = document.getElementById("emoji-clock");
  generateIcon(link);
  // update every 15minutes
  setTimeout(generateIcon, 1000 * 60 * 15, link);
}

function generateIcon(link) {
  const padding = 100 / 16;
  const emoji = getEmojiClock();

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const t1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t1.setAttribute("y", ".875em");
  t1.setAttribute("font-size", "100");
  t1.textContent = emoji;
  svg.appendChild(t1);

  link.href = "data:image/svg+xml," + svg.outerHTML.replace(/"/gi, "%22");
}

/**
 * Get the greeting based on time
 * @return {String} The greeting
 */
var getGreeting = function () {
  if (now > 20) return "Good night! 🌙"; // If it's after 8pm
  if (now > 17) return "Good evening! 🌅"; // If it's after 5pm
  if (now > 11) return "Good afternoon! 🌇"; // If it's after noon
  return "Good morning! 🌞"; // Default message
};

var greeting = document.getElementById("greeting");
var now = new Date().getHours();

/**
 * Adjust the color theme based on time
 */
var adjustColorMode = function () {
  // Remove any existing classes
  document.documentElement.classList.remove("transitional");
  document.documentElement.classList.remove("night");

  // If it's nighttime, go dark mode
  if (now > 20) {
    document.documentElement.classList.add("night");
    return;
  }

  // If it's morning or evening, go transitional
  if (now > 17 || now < 11) {
    document.documentElement.classList.add("transitional");
  }
};

/**
 * Add a greeting and adjust the color palette
 */
var updateUI = function () {
  // Set the greeting
  greeting.textContent = getGreeting();

  // Update color palette
  adjustColorMode();
};

window.addEventListener("DOMContentLoaded", initEmojiClock);

// Update the UI on page load
updateUI();

// Check again every 15 minutes
setInterval(function () {
  now = new Date().getHours();
  updateUI();
}, 1000 * 60 * 15);
