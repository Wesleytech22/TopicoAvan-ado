const express = require('express')
const app = express();
const chamadoRoutes = require('./routes/chamadoRoutes.js')
const port = 3000;

app.use(express.json());

app.use('/chamado', chamadoRoutes);

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port);
});
