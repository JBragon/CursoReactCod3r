import React from 'react'

export default props =>
    <div>
        {React.cloneElement(props.children, {...props})}
        {/* {props.children} */}
    </div>