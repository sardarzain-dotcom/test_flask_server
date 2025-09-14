document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-form');
  const resultEl = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
    resultEl.textContent = 'Calculating...';

    try {
      const resp = await fetch('/api/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a, b, c })
      });

      const data = await resp.json();
      if (!resp.ok) {
        resultEl.textContent = data.error || 'Server error';
        return;
      }

      resultEl.textContent = `Result: ${data.result}`;
    } catch (err) {
      resultEl.textContent = 'Network error: ' + err.message;
    }
  });
});
