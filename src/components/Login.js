import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { auth, provider } from '../firabase'
function Login() {
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img 
            src='data:image/png;base64,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'
            alt=''
            />
            <h1>Sign in to Slack Clone</h1>
            <p>laxman.slack.com</p>
            <Button 
                onClick={signIn}
                >Sign in with Google</Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);

    > img {
        object-fit: contain;
        height: 180px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`