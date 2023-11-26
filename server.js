const express = require('express');
const fs = require('fs');
const app = express();
const data = require('./data.json'); // Memuat data dari file data.json

app.get('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const foundData = data.find(item => item.id === id);

  if (foundData) {
    return res.json(foundData); // Data ditemukan, kirim respons dengan data
  } else {
    return res.status(404).json({ message: 'Data not found' }); // Data tidak ditemukan, kirim respons not found
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
