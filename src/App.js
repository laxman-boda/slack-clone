import React, { useState } from 'react';
import './App.css';
import { BrowserRouter,
  Switch,
  Route,
  Link, 
  Routes} from 'react-router-dom'
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { auth } from './firabase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './components/Login';
import  Spinner  from 'react-spinkit';
import ClipLoader from "react-spinners/ClipLoader";
function App() {

  const [user,loading] = useAuthState(auth)

  if(loading){
    return (
      <AppLoading>
        <AppLoadingContents>
        <img 
            src='data:image/png;base64,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'
            alt=''
            />

<Spinner
        color="green"
        fadeIn='none'
        name="ball-spin-fade-loader"
      />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
      {!user? ( <Login /> ): (
      <>
          <Header />
          <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />}  />
          </Routes>
          </AppBody>
      </>
      )
      }
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    > img {
      height: 100px;
      padding: 20px;
      margin-bottom: 40px;
    }
  
  `



const AppBody = styled.div`
  display: flex;
  height: 100vh;
`