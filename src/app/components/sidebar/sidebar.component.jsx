import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebar.style.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Bogdan Negura</h2>
                <h4>id.neg3001@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statnumber">234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statnumber">112</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export { Sidebar }