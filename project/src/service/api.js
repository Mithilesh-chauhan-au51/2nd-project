import axios from 'axios';

const url = "http://localhost:8000"

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("add use api", error.message);
    }
}

export const getUsers = async () => {

    try {
        let response = await axios.get(`${url}/user`);
        return response.data;
    } catch (error) {
        console.log('error while calling getUser', error.message);
    }
}

export const setConversation = async (data) => {

    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('error while calling setconversation', error.message);
    }
}

export const getConversation = async (data) => {

    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log('error while calling getconversation', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("error while calling newMessage api", error.message);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("error while calling getMessage api", error.message);
    }
}
 