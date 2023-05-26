import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./headerMenu";

import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from '@mui/icons-material';


const Component = styled(Box)({
    height: '44px',
    background: '#ededed',
    padding: '8px 15px',
    display: "flex",
    alignItems: 'center'
})
const Wrapper = styled (Box)({
    marginLeft: 'auto',
    display: 'flex'   
})
const InnerWrapper = styled(Box)({
    margin: '8px' 
})
const Image = styled('img')({
    height: 45,
    width: 45,
    borderRadius: '50%'
})

const Header = () => {

   const { account } = useContext (AccountContext)

    return(
        <Component>
            <Image src={account.picture} alt="profile" />
            <Wrapper>
                <InnerWrapper>
                    <MessageIcon />
                </InnerWrapper>
                <InnerWrapper>
                    <HeaderMenu />
                </InnerWrapper>
            </Wrapper>
        </Component>
    )
}


export default Header;