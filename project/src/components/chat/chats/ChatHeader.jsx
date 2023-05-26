import { useContext } from 'react';
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";


const Header = styled (Box)({
    height: '44px',
    background: '#ededed',
    padding: '8px 15px',
    display: "flex",
    alignItems: 'center'
})
const Image = styled('img')({
    height: '40px',
    width: '40px',
    borderRadius: '50%'
})
const Name = styled(Typography)({
    marginLeft: '15px !important'
})
const Status = styled(Typography)({
    marginLeft: '12px !important',
    fontSize: '12px',
    color: 'rgb(0, 0, 0, 0.6)'
})

const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    return(
        <Header>
            <Image src={ person.picture } alt='dp' />
            <Box>
                <Name>{ person.name }</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
            </Box>
        </Header>
    )
}


export default ChatHeader;