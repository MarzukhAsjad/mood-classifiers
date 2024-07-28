const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 9090;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve static files from the 'models' directory
app.use('/models', express.static(path.join(__dirname, 'models')));

// Serve static files from the 'src' directory
app.use('/src', express.static(path.join(__dirname, 'src')));

// Serve index.html from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});