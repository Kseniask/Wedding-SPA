import React, { ReactNode, useEffect, useState } from "react";
import { ThemeOption } from "../types/ThemeOption";
import GlobalDataContext, {defaultGlobalDataContextValues as defaultValues} from "./GlobalDataContext";
import { themeEnglish, themeUkrainian } from "../shared/constants";
import Theme from "../types/Theme";

interface GlobalDataProviderProps {
    children: ReactNode;
}

const GlobalDataProvider = ({children}:GlobalDataProviderProps) => {
    const [theme, setTheme] = useState<ThemeOption>(ThemeOption.English);
    const [themeValues, setThemeValues] = useState<Theme>(themeEnglish);

    useEffect(()=>{
        if(theme) {
            setThemeValues(theme === ThemeOption.English ? themeEnglish: themeUkrainian )
        }
    },[theme])

    return (
        <GlobalDataContext.Provider value={{themeValues, setTheme}}> {children} </GlobalDataContext.Provider>
    )
}

export default GlobalDataProvider;