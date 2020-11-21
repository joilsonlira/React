import './index.css' //importa o estilo CSS pa a pagina index

import React from 'react' //importa a biblioteca React

import reactDOM from 'react-dom' // importa o renderizador react"

import App from './App.jsx' //importa o componente App



reactDOM.render(
    <App></App>, //componente App
    document.getElementById('root')
);