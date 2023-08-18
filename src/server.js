// importar o pacote do express
const express = require('express');

// instanciar o express na variavel app
const app = express();

// desfinir porta do servidor em um variavel
const PORT = 3005;

// testar api com a função listen
app.listen(PORT, () => console.log(`Running at port ${PORT}`))