import { useContext } from "react";
import { Box, Dialog, styled } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";


import Menu from './menu/Menu';
import EmptyChat from "./chats/EmptyChat";
import ChatBox from "./chats/ChatBox";


const Component = styled(Box)({
    display:'flex',
})
const LeftComponet = styled(Box)({
    minWidth: '350px',
    padding: '1%'
    
})
const RightComponet = styled(Box)({
    minWidth: '72%',
    padding: '1%',
    
})

const dialogstyle = {
    height: '95%',
    margin: '10px',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    // boxShadow: 'none',
    // border: '1px solid black'
}

const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return(
        <Dialog
            open={true}
            PaperProps= {{ sx : dialogstyle }}
            hideBackdrop={true}
        >
            <Component>
                <LeftComponet>
                    <Menu/>
                </LeftComponet>
                <RightComponet>
                { Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }
                </RightComponet>
            </Component>
        </Dialog>
    )
}


export default ChatDialog;