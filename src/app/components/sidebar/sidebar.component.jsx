import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebar.style.css"

const Sidebar = () => {

    const recentItem = (topic) => {
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://picsum.photos/600" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Bogdan Negura</h2>
                <h4>id.neg3001@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statnumber">2341</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statnumber">1122</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programing")}
                {recentItem("frontend developer")}
                {recentItem("design")}
                {recentItem("javascript developer")}
            </div>
        </div>
    )
}

export { Sidebar }