import axios from 'axios';

const $host = axios.create({
    baseURL:"http://localhost:5000/",

})

const $authHost = axios.create({
    baseURL:"http://localhost:5000/",
})

const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem(`profile`)).token}`
    console.log(config)
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
