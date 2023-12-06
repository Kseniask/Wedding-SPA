import React from "react";
import { ThemeOption } from "../types/ThemeOption";
import Theme from "../types/Theme";
import { themeEnglish } from "../shared/constants";

export interface GlobalDataState {
    themeValues: Theme;
    setTheme: (theme: ThemeOption) => void
}
const notFoundCallback = () =>{
    throw new Error('Connaot find global data provider int he parent tree')
}
export const defaultGlobalDataContextValues = {
    themeValues: themeEnglish,
    setTheme: notFoundCallback
}

export default React.createContext<GlobalDataState>({
    ...defaultGlobalDataContextValues
})