import type { Theme } from "./ThemeProvider"


type Action = {type:"set-theme",payload:Theme}
interface IThemeState {
    theme:Theme

}

export const themeReducer = (state:IThemeState,action:Action):IThemeState=> {

    switch (action.type) {
        case 'set-theme':
            return {...state,theme:action.payload}
        default:
            return state;
    }


}