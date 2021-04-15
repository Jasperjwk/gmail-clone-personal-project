import { Button, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch, useSelector } from 'react-redux';
import { openSendMessage, selectOpenMail } from './features/mailSlice';
import { db } from "./firebase";

function Sidebar() {

    // A gun that fires off an event
    const dispatch = useDispatch();

    const selectedMail = useSelector(selectOpenMail);

    const [emails, setEmails] = useState([]);

    
    useEffect(() => {
        // Snapshot is like a camera that snaps real time data
        // It's like a real time listener so anything that changes
        // in the database then it is going to be updated
        db.collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, []) //Run it once when the emailList component loads

    return (
        <div className="sidebar">
            <Button 
                className="sidebar__compose"
                startIcon={<AddIcon fontSize="large"/>}
                onClick={() => dispatch(openSendMessage())}
                >
                    Compose
            </Button>


            {/* <div className="emailList__list">
                {emails.map(({id, data: {to, subject, message, timestamp}}) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time = {timestamp}
                    />
                ))}
            </div> */}

            <SidebarOption 
            Icon={InboxIcon} 
            title="Inbox" 
            number={emails.length}
            selected={true}
            />
            <SidebarOption Icon={StarIcon} title="Starred" number={emails.length}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={emails.length}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={emails.length}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={emails.length}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={emails.length}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={emails.length}/>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
