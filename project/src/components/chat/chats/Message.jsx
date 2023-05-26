import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { formatDate } from '../../../utils/common-utils';
import { AccountContext } from '../../../context/AccountProvider';

const Own = styled(Box)({
    background: '#dcf8c6',
    padding: '5px',
    maxWidth: '60%',
    marginLeft: 'auto',
    display: 'flex',
    borderRadius: '10px',
    wordBreak: 'break-word',
    width: 'fit-content'
});
const Wrapper = styled(Box)({
    background: '#FFFFFF',
    padding: '5px',
    maxWidth: '60%',
    display: 'flex',
    borderRadius: '10px',
    wordBreak: 'break-word',
    width: 'fit-content'
});
const Text = styled(Typography)({
    fontSize: '10px',
    padding: '0 25px 0 5px'
});
const Time = styled(Typography)({
    fontSize: '10px',
    color: '#919191',
    marginTop: '6px',
    wordBreak: 'keep-all',
    marginTop: 'auto'
})

export const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

    return(
        <>
            {
                account.sub === message.senderId ? 
                    <Own>
                        <Text> {message.text} </Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Own>
                :
                    <Wrapper>
                        <Time>{formatDate(message.createdAt)}</Time>
                        <Text> {message.text} </Text>
                    </Wrapper>
            }
        </>
    )
}
 

export default Message;

