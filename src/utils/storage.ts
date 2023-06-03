const getLocalStorage = (key: string): string | null => {
    if (typeof window === "undefined") {
        return null;
    }
    return localStorage.getItem(key);
};

const setLocalStorage = (key: string, value: string) => {
    if (typeof window === "undefined") {
        return;
    }
    localStorage.setItem(key, value);
};

export { getLocalStorage, setLocalStorage };
