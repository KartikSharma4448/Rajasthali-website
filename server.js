const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies and JSON (useful for forms later)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Main Route - Render the Landing Page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`==================================================`);
  console.log(`  Rajasthali Tours Web Application is Running!   `);
  console.log(`  Local URL: http://localhost:${PORT}             `);
  console.log(`==================================================`);
});
