import { Apps, BookmarkBorder, CreateOutlined, Drafts, ExpandLess, FiberManualRecord, Filter, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import SidebarOptions from './SidebarOptions'
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firabase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
    const [Channels , loading, error] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth)
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>LUCKY FAM HQ</h2>
                <h3>
                    <FiberManualRecord />
                    {user.displayName}
                </h3>
            </SidebarInfo>
            <CreateOutlined />
        </SidebarHeader>

        <SidebarOptions Icon={InsertComment} title="Threads" />
        <SidebarOptions Icon={Inbox} title="Mentions & Reactions" />
        <SidebarOptions Icon={Drafts} title="Saved items" />
        <SidebarOptions Icon={BookmarkBorder} title="Channel Browser" />
        <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
        <SidebarOptions Icon={Apps} title="Apps" />
        <SidebarOptions Icon={Filter} title="File browser" />
        <SidebarOptions Icon={ExpandLess} title="Show less" />

        <hr />
        <SidebarOptions Icon={ExpandLess} title="Channels" />
        <hr />
        <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />

        {Channels?.docs.map((doc) => (
            <SidebarOptions 
                key={doc.id}
                id={doc.id}
                title={doc.data().name}
            />
        ))}

    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.2;
    border: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }

`
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }

`