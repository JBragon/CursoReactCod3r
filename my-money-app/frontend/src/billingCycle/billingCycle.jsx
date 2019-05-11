import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Contet from '../common/template/content'

class BillinCycles extends Component {

    render(){
        return (
            <div>
                <ContentHeader title='BillinCycles' small='Versão 1.0' />
                <Contet>
                    BillinCycles
                </Contet>
            </div>
        )
    }
}

export default BillinCycles