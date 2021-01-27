import React from 'react'
import "./widgets.style.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("I'm back in the game", "Top News 9999 readers")}
            {newsArticle("Coronavirus: UK updates", "Top News 434 readers")}
            {newsArticle("Tesla hits new hights", "Car & auto 300 readers")}
            {newsArticle("Bitcoin breaks $22k", "Crypto - 200 readers")}
            {newsArticle("Is Redux too goos", "Code - 123 readers")}
        </div>
    )
}

export { Widgets }
