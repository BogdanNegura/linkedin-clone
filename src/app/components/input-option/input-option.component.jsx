import React from 'react'
import "./input-option.style.css"

const InputOptions = ({ Icon, title, color }) => {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }}/>
            <h4>{title}</h4>
        </div>
    )
}

export { InputOptions }
