import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }
    
    menosUm = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    //Toda classe tem que possuir o método render
    //Ele é responsável por renderizar o componente na tela
    render(){
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}

//Solução 01 - Bind (Mais verbosa)
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//Solução 02 - Função Arrow (onClick)
//<button onClick={() => this.maisUm()}>Inc</button>

//Solução 03 - Função Arrow 
// maisUm = () => {
//     this.props.numero++
// }