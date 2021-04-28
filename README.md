# gmail-clone-personal-project


# Hosting URL:
https://clone-personal-project-4d9af.web.app

![gmail](https://user-images.githubusercontent.com/63961200/116339690-745b0f80-a810-11eb-98d4-32655dac863f.gif)

# Tech in my project build

1) React
2) Redux
3) React-Router
4) Firebase Firestore Realtime db
5) Material UI
6) Google Authentication
7) Deploy using Firebase!
8) Front-end
9) Back-end

# Steps to deploy my project using firebase

1) npm install -g firebase-tools
2) firebase init (hosting > build > y > n)
3) npm run build
4) firebase use "project id"
5) firebase deploy

# My Personal Notes

position: relative; is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position


flex: 1 - The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container

import { useForm } from "react-hook-form";
const { register, handleSubmit, watch, errors} = useForm();

npx create-react-app gmail-clone-personal-project --template redux

yarn add @material-ui/core
yarn add @material-ui/icons
npm install react-router-dom
yarn add react-hook-form

/* Keep the aspect ratio, i don't want the image to stretch out */
object-fit: contain;

/* Take up 70% of screen */
flex: 0.7;

// Target material ui icon
.header__middle > .MuiSvgIcon-root

.header__middle > input {
    border: none;
    /* stretch the text field box width: 100%; */
    width: 100%;
    padding: 10px;
    /* Remove the border outline of text box */
    outline-width: 0;
    background-color: transparent;
}

            <Button 
                className="sidebar__compose"
                startIcon={<AddIcon fontSize="large"/>}
                >
                    Compose
            </Button>

position: sticky;
top: 0;

    /* Since i have sticky element, i don't want it to be overwritten
    by anything */
    z-index: 999;

.emailRow:hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
}

/* Takes up 80% of space */
flex: 0.8;

/* It adds on the text if it gets too long */
text-overflow: ellipsis;

    /* This means when the text goes too far, it will wrap the text
    to the next line */
    overflow-wrap: break-word;

{/* If sendMessageIsOpen then i should render the sendMail */}
{sendMessageIsOpen && <SendMail />}

// A gun that fires off an event
const dispatch = useDispatch();

onClick={() => dispatch(openSendMessage())}

// Snapshot is like a camera that snaps real time data
// It's like a real time listener so anything that changes
// in the database then it is going to be updated



 <div className="emailList__list">
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
            </div>

timestamp: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')

/* Hide scrollbar for Chrome, Safari and Opera */
.emailList::-webkit-scrollbar{
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.emailList{
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Keep the aspect ratio */
object-fit: contain;

.login{
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #f2f2f2;
}



