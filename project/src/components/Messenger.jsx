

import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";


const Component = styled(Box)({
    height: '100vh'
})
const Header = styled(AppBar)({
    height: '200px'
})

 const Messanger = () =>{

    const { account } = useContext(AccountContext);

     return(
        <Component>
            {
                account ? <ChatDialog/>
                :
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <LoginDialog/>
                </>
            }
 
        </Component>
     )
 }

 export default Messanger;