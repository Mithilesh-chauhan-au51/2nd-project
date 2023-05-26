
import { Box, styled, InputBase } from "@mui/material";

const Container = styled(Box)({
    height: '50px',
    background: '#ededed',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: '0 15px'
})
const Search = styled(Box)({
    background: '#FFFFFF',
    borderRadius: '18px',
    width: 'calc(95%)'
})
const InputField = styled(InputBase)({
    width: '100%',
    padding: '20px',
    paddingLeft: '25px',
    fontSize: '14px',
    height: '20px',
    width: '100%'
})

const Footer = ({ sendText, setValue, value }) => {

    return(
        <Container>
            <Search>
                <InputField
                placeholder="Type a message" 
                onChange = {(e) => setValue(e.target.value)}
                onKeyPress={(e) => sendText(e)}
                value={value}
                />
            </Search>
        </Container>
    )
}


 export default Footer;