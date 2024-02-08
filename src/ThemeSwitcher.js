import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeSwitcher = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const onThemeSelect = (event) =>{
        setTheme(event.target.value);
    }

    return(<>
            <h1>Theme Switcher</h1>
            <select value={theme} onChange={onThemeSelect}>
                <option value="ligth">Tema Claro</option>
                <option value="dark">Tema Oscuro</option>
                <option value={"custome"}>Tema Personalizado</option>
            </select>
        </>
    )
}

export default ThemeSwitcher;