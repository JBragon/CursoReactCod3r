import ReactDOM from 'react-dom'
import React from 'react'
import MultiElementos from './componentes/MultiElementos'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import {CompA, CompB} from './componentes/DoisComponentes'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <MultiElementos />
    </div>
, elemento)

// ReactDOM.render(
//     <div>
//         <CompA valor="Olá, eu sou o A!"/>
//         <CompB valor="Olá, eu sou o B!"/>
//     </div>
// , elemento)

// ReactDOM.render(
//     <div>
//         <PrimeiroComponente />
//     </div>
// , elemento)

 