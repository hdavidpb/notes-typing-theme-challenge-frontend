import { create } from "zustand";
import type { AuthResponse } from "../types/auth.types";
import { refreshTokenAction } from "../actions/refresh-token.action";
import { loginAction } from "../actions/login.action";


export interface AuthState {
    authStatus: "checking" | "authenticated" | "not-authenticated";
    token: string | null;
    user: {
        name: string;
    },
    login: (email:string,password:string) => Promise<AuthResponse | null>;
    refreshStatus: () => Promise<AuthResponse | null>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set)=> ({
    authStatus: "checking",
    token: null,
    user: {
        name: ""
    },
     login: async(email:string,password:string) => {
        set({authStatus: "checking"});
        const data = await loginAction({email,password});
        if(data) {
            set({authStatus: "authenticated", token: data.access_token, user: data.user});
        }else{
            set({authStatus: "not-authenticated"});
        }

        return data;
    },
    refreshStatus: async() => {
        set({authStatus: "checking"});
        const data = await refreshTokenAction();
        if(data) {
            set({authStatus: "authenticated", token: data.access_token, user: data.user});
        }else{
            set({authStatus: "not-authenticated"});
        }

        return data;
    },
    logout: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        set({authStatus: "not-authenticated", token: null, user: {name: ""}});
    }


}))
  