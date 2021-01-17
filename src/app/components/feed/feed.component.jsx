import React from 'react'
import "./feed.style.css"
import CreateIcon from '@material-ui/icons/Create';
import { InputOptions } from '../input-option/input-option.component';
import ImageIcon from '@material-ui/icons/Image';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" name="" id=""/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo"/>
                </div>
            </div>
        </div>
    )
}

export { Feed }
