import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Logo = () => {

    const {theme} = useContext(ThemeContext);

    return(
        <p>Este es el logo. El tema actual es: {theme}</p>
    )
}

export default Logo;