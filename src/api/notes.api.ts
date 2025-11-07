import axios from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const apiTask = axios.create({
    baseURL:BASE_URL
})

apiTask.interceptors.request.use((config)=> {


    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OTBjZTVmNDA0ZDJiZTBlN2EyNGIxNWUiLCJlbWFpbCI6Imhlcm5hbi5wbGF6YWJzQGdtYWlsLmNvbSIsIm5hbWUiOiJEYXZpZCIsImlhdCI6MTc2MjUyODE0NywiZXhwIjoxNzYyNjE0NTQ3fQ.f055R2aflf6XXy2WKH5xOzm5MYoPfMUufA52cIjjnsM"

    return config;

})