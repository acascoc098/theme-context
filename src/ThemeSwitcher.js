import { useContext} from "react";
import "./ThemeSwitcher.css"
import { ThemeContext } from "./ThemeProvider";

const ThemeSwitcher = () => {
    const {theme, setTheme, clase, setClase} = useContext(ThemeContext);

    const onThemeSelect = (event) =>{
        setTheme(event.target.value);
        setClase(event.target.value);
    }

    return(<>
            <div className={clase}>
                <h1>Theme Switcher</h1>
                <p>Cambio a tema: {theme}</p>
                <select value={theme} onChange={onThemeSelect}>
                    <option value="ligth">Tema Claro</option>
                    <option value="dark">Tema Oscuro</option>
                    <option value="custome">Tema Personalizado</option>
                </select>
            </div>
        </>
    )
}

export default ThemeSwitcher;