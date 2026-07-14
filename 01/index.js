const express = require('express');

const server = express();

const cursos = ['NodeJS', 'JavaScript', 'React Native'];

server.get('/curso/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index])
});

server.listen(3000, () => console.log('Servidor online...'))