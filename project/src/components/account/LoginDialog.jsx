import { Dialog, Box, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from 'jwt-decode';

import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const Component = styled(Box)({
    display: "flex"
})

const Container = styled(Box)({
    padding: "50px"
})

const Loginpart = styled(Box)({
    padding: "65px"
})
const dialogstyle = {
    height: '50%',
    margin: '12%',
    width: '60%'
}

 const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext)

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        addUser(decoded);
    }

    const onLoginError = (res) => {
        console.log("Login Failed", res);
    }

    return(
        <Dialog
            open={true}
            PaperProps= {{ sx : dialogstyle }}
        >
            <Component>
                <Container>
                    <p>login</p>
                </Container>
                <Loginpart>
                    with google
                    <Box>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Loginpart>
            </Component>
        </Dialog>
    )
 }

  export default LoginDialog;