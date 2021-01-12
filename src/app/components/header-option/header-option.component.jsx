import React from "react"
import { Avatar } from "@material-ui/core"
import "./header-option.style.css"

const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className="header__option">
            {Icon && <Icon className=" "/>}
            {avatar && <Avatar className="header-option__icon" src={avatar}/>}
            <h3 className="header-option__title">{title}</h3>
        </div>
    )
}

export { HeaderOption }