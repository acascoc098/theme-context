import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('ligth');
    const [clase, setClase] = useState('ligth');

    return (
        <ThemeContext.Provider value={{theme, setTheme, clase, setClase}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;