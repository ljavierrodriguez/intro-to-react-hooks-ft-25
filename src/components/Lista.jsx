import React from 'react'
import PropTypes from 'prop-types'

const Lista = (props) => {
    return (
        <ul className='list-group w-50 mx-auto my-1'>
            {
                props.nombres.map((item, index) => {
                    return (
                        <li key={index} className='list-group-item'>{item}</li>
                    )
                })
            }
        </ul>
    )
}

Lista.propTypes = {
    nombres: PropTypes.array.isRequired
}

export default Lista