
export const useSetLocalStorage = (key, val) => {
    localStorage.setItem(key, val);
    return val;
}

export const useGetLocalStorage = (key) => {
    const val = localStorage.getItem(key);
    return val;
}
