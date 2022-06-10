import { useReducer, useEffect } from "react"

const useLocalStorageReducer = (reducer, defaultValue, key) => {
    const [state, dispatch] = useReducer(reducer, defaultValue, () => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        }
        catch (e) {
            value = defaultValue;
        }
        return value;
        // return defaultValue;
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])
    return [state, dispatch];
}
export default useLocalStorageReducer;