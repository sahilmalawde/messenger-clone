import { useEffect, useState } from 'react';
import './App.css';
import Message from './message';
import db from './firebase.js';
import firebase from 'firebase/compat/app';
import { Timestamp } from 'firebase/firestore';


function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [user,setUser] = useState('')

    useEffect(() =>
        {
            db.collection('messages').orderBy('timestamp').onSnapshot(snapshot=>{
                setMessages(snapshot.docs.map(doc => doc.data()))
            
            })
        },
        []
    )
    
    useEffect(() =>
        {
            setUser(prompt('Enter your name'))
        },
        []
    )
    
    const sendMessage = (event) => {
        event.preventDefault()
        db.collection('messages').add({
            user:user,
            text:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    console.log(messages)

    return (
        <>
            <div className="navbar">
                <a href="" id='home'>The GRP messenger</a>
            </div>

            <div className="messagebox">
                <form action="">
                    <input onChange={(event) => {
                        event.preventDefault();
                        setInput(event.target.value)
                    }} value={input} type="text" placeholder='Enter Your message' />
                    <button disabled={!input} onClick={(sendMessage)} type='submit'>Send</button>
                </form>
            </div>
            <div className="main">
            {
                messages.map(message => (
                    <Message user = {message.user} text ={message.text} type = {message.user == user ? 'self' : 'dif'}/>
                ))
            }
            </div>

        </>
    )
}

export default App;
