function getEmojiClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minutes = now.getMinutes();
  const this_many_past = Math.abs(Math.round((minutes - 30) / 60));
  console.log(
    "hour: " +
      hour +
      " minutes " +
      minutes +
      " this many past: " +
      this_many_past
  );
  let base_code_point = "0x1F5";
  if (this_many_past == 1) {
    // then it is the top of the hour
    const start = 0x50;
    let clock = String.fromCodePoint(
      base_code_point + (start + hour).toString(16)
    );
    console.log(clock);
    return clock;
  } else {
    // or it is half past the hour
    const start = 0x5b;
    let clock = String.fromCodePoint(
      base_code_point + (start + hour).toString(16)
    );
    console.log(clock);
    return clock;
  }
  // so basically we count 50 to 5a for the hour marks and 5b to 67 for the half marks.
  // So not totally helpfuL?
  // But I guess it's just figure out whether we're doing an o'clock or 30min and then add ## to it
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

  //<text y=%22.9em%22 font-size=%2290%22></text>
  //<text text-anchor=%22end%22 y=%221.9em%22 x=%221.9em%22 font-size=%2250%22>10</text>
  const t1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t1.setAttribute("y", ".9em");
  t1.setAttribute("font-size", "90");
  t1.textContent = emoji;
  svg.appendChild(t1);

  link.href = "data:image/svg+xml," + svg.outerHTML.replace(/"/gi, "%22");
}
