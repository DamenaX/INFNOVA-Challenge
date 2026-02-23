import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Initialize state from localStorage, default to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('nova-theme');
        // We strictly use 'light' or whatever was saved, ignoring system preference here
        return savedTheme || 'light';
    });

    // Apply the theme class to the HTML element whenever it changes
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Persist to localStorage
        localStorage.setItem('nova-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook to use the theme context easily
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
