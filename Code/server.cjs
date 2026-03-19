const express = require('express');
const app = express();
const port = 5000;

// Мидълвар за обработка на JSON
app.use(express.json());

// Примерен GET маршрут
app.get('/api/posts', (req, res) => {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
  ];
  res.json(posts);
});

// Примерен POST маршрут
app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  newPost.id = Date.now();
  res.status(201).json(newPost);
});

// Стартирай сървъра
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
