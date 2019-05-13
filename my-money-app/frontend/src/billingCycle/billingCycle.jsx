import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Contet from '../common/template/content'

class BillingCycles extends Component {

    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Contet>
                    Ciclos de Pagamento
                </Contet>
            </div>
        )
    }
}

export default BillingCycles