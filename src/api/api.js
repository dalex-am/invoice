import axios from 'axios'

export const authLogin = (login) => {
    return axios.get(`https://api.github.com/users/${login}`, {})  
        .then(
            response => {return response}
        )
        .catch(() => {return false})
}