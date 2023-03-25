function calculateActualTime(event) {
  event.preventDefault();
  const hours = parseInt(document.getElementById("hours").value);
  const minutes = parseInt(document.getElementById("minutes").value);
  const seconds = parseInt(document.getElementById("seconds").value);
  const speed = parseFloat(document.getElementById("speed").value);

  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
  const actualTimeInSeconds = totalTimeInSeconds / speed;
  const actualHours = Math.floor(actualTimeInSeconds / 3600);
  const actualMinutes = Math.floor((actualTimeInSeconds % 3600) / 60);
  const actualSeconds = Math.floor(actualTimeInSeconds % 60);

  const formattedTotalTime = formatTime(hours, minutes, seconds);
  const formattedActualTime = formatTime(
    actualHours,
    actualMinutes,
    actualSeconds
  );

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
        <div class="output-section">
            <div class="output-label">Total Time:</div>
            <div class="output-value">${formattedTotalTime}</div>
        </div>
        <div class="output-section">
            <div class="output-label">Playback Speed:</div>
            <div class="output-value">${speed}x</div>
        </div>
        <div class="output-section">
            <div class="output-label">Actual Time Taken:</div>
            <div class="output-value">${formattedActualTime}</div>
        </div>
    `;
}
function formatTime(hours, minutes, seconds) {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
