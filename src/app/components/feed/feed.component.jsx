import React from 'react'
import "./feed.style.css"
import CreateIcon from '@material-ui/icons/Create';
import { InputOptions } from '../input-option/input-option.component';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';

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
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7a33e"/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                </div>
            </div>
        </div>
    )
}

export { Feed }
