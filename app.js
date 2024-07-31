// app.js
const express = require('express');
const app = express();
const port = 3000;

// Ana sayfa için rota tanımı
app.get('/', (req, res) => {
  res.send('Merhaba Dünya!');
});

// /about sayfası için rota tanımı
app.get('/about', (req, res) => {
  res.send('Bu bir hakkında sayfasıdır.');
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
