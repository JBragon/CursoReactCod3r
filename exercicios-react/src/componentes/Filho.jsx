import React from 'react'

export default props => 
    <div>
        <button 
            onClick={() => props.notificaSaida('shopping')}>
            Vou Sair
        </button>
    </div>