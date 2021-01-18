import React, { useEffect, useState } from 'react'
import "./feed.style.css"
import CreateIcon from '@material-ui/icons/Create';
import { InputOptions } from '../input-option/input-option.component';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Post } from '../post/post.component';
import { db } from '../../firebase';
import firebase from "firebase"

const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault()
        db.collection('posts').add({
            name: 'Bogdan Negura',
            description: 'this is test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        
        setInput("")
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7a33e"/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export { Feed }
