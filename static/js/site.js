function getEmojiClock() {
  const now = new Date();
  const hour24 = now.getHours();
  const minutes = now.getMinutes();
  const percent_past = minutes / 60;
  var nearest_hour = Math.round((hour24 + percent_past) % 12);
  if (nearest_hour == 0) {
    //if it is currently 12
    nearest_hour = 12;
  }
  const this_many_past = Math.abs(Math.round((minutes - 30) / 30));
  console.log(
    "nearest_hour: " +
      nearest_hour +
      " minutes " +
      minutes +
      " this many past: " +
      this_many_past
  );
  let base_code_point = "0x1F5";
  if (this_many_past == 1) {
    // then it is the top of the hour
    const start = 0x4f;
    let clock = String.fromCodePoint(
      base_code_point + (start + nearest_hour).toString(16)
    );
    console.log(clock);
    return clock;
  } else {
    // or it is half past the hour
    const start = 0x5b;
    let clock = String.fromCodePoint(
      base_code_point + (start + nearest_hour).toString(16)
    );
    console.log(clock);
    return clock;
  }
  // So the emoji count from 1 (o'clock / thirty) to 12 (o'clock / thirty) and
  // so we need the start to be the zero index so when we add the hour it is correctly indexed.
}

function initEmojiClock() {
  const link = document.querySelector('link[rel="icon"]');
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
  t1.setAttribute("y", ".9em");
  t1.setAttribute("font-size", "90");
  t1.textContent = emoji;
  svg.appendChild(t1);

  link.href = "data:image/svg+xml," + svg.outerHTML.replace(/"/gi, "%22");
}
