const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware: parse form data
app.use(express.urlencoded({ extended: true }));

// Route: show form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route: handle form submission
app.post('/submit', (req, res) => {
  console.log('✅ Form submitted:', req.body);
  // After logging data, redirect to success page
  res.redirect('/success.html');
});

// Route: show success page
app.get('/success.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'success.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
