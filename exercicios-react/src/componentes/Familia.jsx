import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
    <div>
        {filhosComProps(props)}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {props.children} */}
    </div>