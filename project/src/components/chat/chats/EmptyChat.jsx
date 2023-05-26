
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)({
    height: '100%',
    width: '100%',
    border: '1px',
    background: '#FFFFFF'
   
})
const Container = styled(Box)({
    height:'95%',
    width: '95%'
})
const Title = styled(Typography)({
    fontSize: '50px',
    color : 'black',
    fontWeight: '400',
    margin: '60px',
    marginTop: '250px',
    background: '#FFFFFF'   
})

const EmptyChat = () => {

    return(
        <Component>
            <Container>
                <Title>
                    Select a Chat
                </Title>
            </Container>
        </Component>
    )
}



export default EmptyChat;