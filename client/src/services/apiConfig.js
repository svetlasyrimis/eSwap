import axios from 'axios'

const JwtToken = localStorage.getItem('token') || null

let apiUrl

const apiUrls = {
    production: 'https://mando-list.herokuapp.com/api',
    development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${JwtToken}`,
        'Access-Control-Allow-Origin': '*'
    }
})

export default api