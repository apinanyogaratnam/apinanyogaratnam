import { useEffect, useState } from "react";

import { getLocalStorage, setLocalStorage } from "@/utils/storage";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

const useTheme = () => {
    const [hasMounted, setHasMounted] = useState(false);
    const currentTheme = (getLocalStorage("theme") || Theme.LIGHT) as Theme;
    const [theme, setTheme] = useState<Theme>(currentTheme);
    const [oppositeTheme, setOppositeTheme] = useState<Theme>(currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted) {
            setOppositeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
        }
    }, [theme, hasMounted]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.className = theme;
        }
    }, [theme]);

    const toggleTheme = () => {
        if (!hasMounted) {
            return;
        }
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        setTheme(newTheme);
        setLocalStorage("theme", newTheme);
    };

    if (!hasMounted) {
        return { theme: Theme.LIGHT, toggleTheme, oppositeTheme: Theme.DARK };
    }

    return { theme, toggleTheme, oppositeTheme };
};

export default useTheme;
