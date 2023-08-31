import express from "express";

const app = express();

const PORT = 8000;

app.use(express.json());

app.get('/users', (req, res) => {
  res.json({     
    "id": "1dfga2dld2s",
    "name": "Edwin",
    "lastname": "Amaranto"
  })
});

app.post('/users', (req, res) => {
  const { body } = req;
  res.status(201).json({message: "Usuario", info: body})
});

app.listen(PORT, () => {
  console.log('Servidor corriendo');
});