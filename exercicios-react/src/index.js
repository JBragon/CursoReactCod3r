import ReactDOM from 'react-dom'
import React from 'react'
//import MultiElementos from './componentes/MultiElementos'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA, {CompB} from './componentes/DoisComponentes'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <ComponenteComFuncao />
    </div>
, elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <Familia sobrenome="Bragon">
//             <Membro nome="Jordan" />
//             <Membro nome="José" />
//             {/* <Membro nome="José" /> */}
//         </Familia>
//     </div>
// , elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <FamiliaSilva />
//     </div>
// , elemento)

// ReactDOM.render(
//     <div>
//         <MultiElementos />
//     </div>
// , elemento)

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

 