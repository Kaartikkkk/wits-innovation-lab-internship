import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
    const { theme } = useContext(ThemeContext);

    return (
        <nav>
            <h2>🌗 Theme Switcher</h2>
            <p>Current Theme: {theme}</p>
        </nav>
    );
}

export default Navbar;