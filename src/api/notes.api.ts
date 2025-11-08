import axios from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const apiTask = axios.create({
    baseURL:BASE_URL
})

apiTask.interceptors.request.use((config)=> {
    const access_token = localStorage.getItem("access_token");

    if(access_token) {
        config.headers.Authorization = `Bearer ${access_token}`
    }

    return config;

});


apiTask.interceptors.response.use(response => response,
    async (error) => {
        if (error.response.status === 401) {    
            
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");

            window.alert("Sesión expirada, por favor inicia sesión de nuevo.");

            window.location.href = "/auth";

            console.log("UNAUTHORIZED - 401");
        }
        return Promise.reject(error);
    }
);