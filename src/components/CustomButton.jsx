import React from 'react'

const CustomButton = (props) => {
    return (
        <button className={props.className}>{props.children}</button>
    )
}

export default CustomButton