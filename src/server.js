/**
 * Adicionar o sucrase para poder utilizar o import from em vez de require.... comando de exemplo: yarn add sucrase nodemon -D
 * Se fizer isso, terá que rodar os script da seguinte forma: yarn sucrase-node src/server.js
 * ou
 * configurando a propriedade scripts->dev em package.json (o arquivo nodemon.json nesse projeto faz parte dessa configuração)
 */
// const app = require('/.app');

import app from './app';

app.listen(3333);
