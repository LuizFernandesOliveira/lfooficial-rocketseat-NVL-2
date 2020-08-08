import axios from 'axios'

const api = axios.create({
    baseURL: 'https://3333-dea28843-3712-48ce-8c2d-9c143f6486b2.ws-us02.gitpod.io/',
})

export default api