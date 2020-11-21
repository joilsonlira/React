import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default Props =>
(
    <div className="App">

        <Card titulo="#01 Primeiro Componente">
            <Primeiro />
        </Card>

        <Card titulo="#02 Componente com Parametro" >
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/>
            </Card>
        
        <Card titulo="#03 Componentes com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>  
            </ComFilhos>
        </Card>

        <Card titulo="#04 Repetição">
                <Repeticao></Repeticao>
        </Card>

        <Card titulo="#05 Condicional versão 1">
                <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#06 Condicional versão 2">
                <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
    </div>
);