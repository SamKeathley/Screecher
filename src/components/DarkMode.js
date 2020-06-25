import React, { useState, useEffect } from "react";
import "../styles.css";

function DarkMode() {
    const [darkMode, setDarkMode] = useState(getInitialMode);
    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        } else if (userPrefDark) {
            return true;
        } else {
            return false;
        }
    }

    function getPrefColorScheme() {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <nav>
                <div className="toggle-container">
                    <span role="img" aria-label="Sun" style={{ color: darkMode ? "grey" : "yellow" }}>
                        ☼
                    </span>
                    <span className="toggle">
                        <input
                            checked={darkMode}
                            onChange={() => setDarkMode(prevMode => !prevMode)}
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox" />
                    </span>
                    <span role="img" aria-label="Moon" style={{ color: darkMode ? "slateblue" : "grey" }}>
                        ☽
                    </span>
                </div>
            </nav>
            <main>
                <h1>{darkMode ? "SCREECHER DARK" : "SCREECHER LIGHT"}</h1>
            </main>
        </div>
    );
}

export default DarkMode;