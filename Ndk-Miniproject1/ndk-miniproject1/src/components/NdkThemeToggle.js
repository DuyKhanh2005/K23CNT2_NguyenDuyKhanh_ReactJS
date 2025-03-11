import React from "react";
import { useNdkTheme } from "../context/NdkThemeContext";

export default function NdkThemeToggle() {
    const { theme, toggleTheme } = useNdkTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌞 Chế độ Sáng" : "🌙 Chế độ Tối"}
        </button>
    );
}
