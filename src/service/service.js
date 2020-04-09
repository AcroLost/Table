import * as axios from 'axios'


export const usersPage = {
    getUsers() {
        return axios.get('/data.json')
            .then((res) => {
                return res.data
            })
    }
}