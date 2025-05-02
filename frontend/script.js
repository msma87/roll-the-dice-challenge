
document.getElementById('roll-button').addEventListener('click', async () => {
  const select = document.getElementById('dice-select');
  const sides = parseInt(select.value);
  const resultDiv = document.getElementById('result');

  try {
    // Send POST request to backend
    const res = await fetch('https://roll-the-dice-challenge.onrender.com/roll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sides })
    });

    const data = await res.json();
    // Show result if request is successful
    if (res.ok) {
      resultDiv.textContent = `Result: ${data.result}`;
    } else {
      resultDiv.textContent = `Error: ${data.error}`;
    }
  } catch (err) {
    console.error('Failed to fetch from API:', err); // log for debugging
    resultDiv.textContent = 'Error connecting to server.';
  }
});
