import React, { createContext, useState, useContext, useEffect } from "react";

const NdkThemeContext = createContext();

export function NdkThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"; // Lưu trạng thái theme vào localStorage
    });

    useEffect(() => {
        document.body.className = theme; // Thêm class vào <body> để thay đổi theme
        localStorage.setItem("theme", theme); // Lưu theme vào localStorage để giữ lại sau khi tải lại trang
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <NdkThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </NdkThemeContext.Provider>
    );
}

export function useNdkTheme() {
    return useContext(NdkThemeContext);
}
