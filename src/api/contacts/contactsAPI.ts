import axios from "axios";


type sendMessagePayloadType = {
    name: string
    email: string
    text: string
}

export const sendMessage = (sendMessagePayload: sendMessagePayloadType) => {

    return axios.post('https://nodejs-smtp-server-1.herokuapp.com/sendMessage', sendMessagePayload)
        .then(response => {
            return response}
        )
}