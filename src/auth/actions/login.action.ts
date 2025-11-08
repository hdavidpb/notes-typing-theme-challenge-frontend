import { apiTask } from "../../api/notes.api"
import type { AuthResponse } from "../types/auth.types"

export const loginAction = async (payload:{email:string,password:string}):Promise<AuthResponse | null>=> {

    try {
        
        const { data } = await apiTask.post<AuthResponse>("/auth/login",payload);
        localStorage.setItem("access_token",data.access_token);
        localStorage.setItem("refresh_token",data.access_token);

        return data;

    } catch (error) {
        return null
    }

}