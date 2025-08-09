const express = require('express');
const path = require('path');
const aiRouter = require('./api/ai');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// API routes
app.use('/api/ai', aiRouter);

// Serve the main application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Simplicity OS server running on http://0.0.0.0:${PORT}`);
    console.log('AI guidance system initialized');
    console.log('Remember: AI provides warnings but never restricts user actions');
});
