import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { db } from '../firabase'
import firebase from 'firebase/compat/app';

function ChatInput({channelId,channelName,chatRef}) {
    const [input,setInput] = useState('')
    const sendMessage = (e) =>{
        e.preventDefault()

        if(!channelId){
            return false
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message:input   ,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:'Laxmna Boda',
            userImage:'https://media-exp1.licdn.com/dms/image/C5603AQG2s27_TMNToQ/profile-displayphoto-shrink_800_800/0/1644309951869?e=2147483647&v=beta&t=iGKsB88o8BjJJkuiDPki6GqHmcCu1e6Em9czqBiTYkk'
        })

        chatRef.current.scrollIntoView({
            behavior:"smooth"
        })

        setInput('')
    }
  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`