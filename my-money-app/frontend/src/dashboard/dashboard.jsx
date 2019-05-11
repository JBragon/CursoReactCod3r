import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Contet from '../common/template/content'

class Dashboard extends Component {

    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Contet>
                    Dashboard
                </Contet>
            </div>
        )
    }
}

export default Dashboard