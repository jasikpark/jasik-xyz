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
  setTimeout(generateIcon, 900000, link);
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

window.addEventListener("DOMContentLoaded", initEmojiClock);
