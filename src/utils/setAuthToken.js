// import axios to make API calls
import axios from 'axios'

// write function called setAuhtToken
const setAuhtToken = (token) => {
    if (token) {
        // apply token to every request header
        axios.defaults.headers.common['Authorizationn'] = token
        console.log('TOKEN SET', token)
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuhtToken