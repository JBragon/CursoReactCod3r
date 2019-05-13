import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Contet from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'

class BillinCycles extends Component {

    render(){
        return (
            <div>
                <ContentHeader title='BillinCycles' small='Versão 1.0' />
                <Contet>
                    <Tabs>
                        <TabsHeader>

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