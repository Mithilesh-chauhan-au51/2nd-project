
import { useEffect, useState, useContext } from "react";
import React from 'react';
import { Box, styled, Divider } from "@mui/material";

import { getUsers } from "../../../service/api";
import Conversations from "./Conversations";
import { AccountContext } from "../../../context/AccountProvider";




const Component = styled(Box)({
    height: '81vh',
    overflow: 'overlay'
})
const StyledDivider = styled(Divider)({
    margin: '0 0 0 70px',
    background: '#e9edef',
    opacity: '0.3'
})

const Conversation = ({ text }) => {

    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(()=>{
        const fetchdata = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchdata();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return(
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                    <Conversations user={user} />
                    <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

 export default Conversation;