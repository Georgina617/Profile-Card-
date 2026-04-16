function updateTime() {
  const now = new Date();

  const formattedTime = now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const milliseconds = Date.now();

  document.getElementById('time').textContent =
    `${formattedTime} (${milliseconds})`;
}

updateTime();
setInterval(updateTime, 1000);
