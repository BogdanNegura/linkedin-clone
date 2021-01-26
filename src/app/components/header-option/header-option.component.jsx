import React from "react"
import { Avatar } from "@material-ui/core"
import "./header-option.style.css"
import { useSelector } from "react-redux"
import { selectUser } from "../../../features/userSlice"

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className="header__option">
            {Icon && <Icon className=" "/>}
            {avatar && <Avatar className="header-option__icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>}
            <h3 className="header-option__title">{title}</h3>
        </div>
    )
}

export { HeaderOption }