import { AccessTime } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { HelpOutline } from '@mui/icons-material';
function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />

      </HeaderLeft>
      {/* Header search */}

      <HeaderSearch>

        <SearchIcon /> 
        <input placeholder='Search PAPAFAM' />
      </HeaderSearch>

      {/* Header Right */}

      <HeaderRight>
          <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

    > .MuiSvgIcon-root{
      margin-left: auto;
      margin-right: 20px;
    }
    
`
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
`

