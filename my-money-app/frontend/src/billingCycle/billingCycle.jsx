import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Contet from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'

class BillinCycles extends Component {

    render(){
        return (
            <div>
                <ContentHeader title='BillinCycles' small='Versão 1.0' />
                <Contet>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Contet>
            </div>
        )
    }
}

export default BillinCycles