import { apiTask } from "../../api/notes.api"
import type { AuthResponse } from "../types/auth.types"

export const refreshTokenAction = async ():Promise<AuthResponse | null>=> {

    const refresh_token = localStorage.getItem("refresh_token");

    if(!refresh_token) return null;

    try {
        
        const { data } = await apiTask.post<AuthResponse>("/auth/refresh",{},{headers:{
            "Authorization": `Bearer ${refresh_token}`
        }});
        localStorage.setItem("access_token",data.access_token);
        localStorage.setItem("refresh_token",data.refresh_token);

        return data;

    } catch (error) {
        return null
    }

}