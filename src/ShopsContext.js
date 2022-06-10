import React, { createContext } from 'react'
import ShopsReducer from './Reducers/ShopReducer';
import useLocalStorageReducer from './Hooks/useLocalStorageReducer';
import initialShops from './ShopSeeds'

const ShopsContext = createContext();
const dispatchContext = createContext();


const ShopsProvider = (props) => {
    const [shops, dispatch] = useLocalStorageReducer(ShopsReducer, initialShops, 'shops');
    return (
        <ShopsContext.Provider value={shops}>
            <dispatchContext.Provider value={dispatch}>
                {props.children}
            </dispatchContext.Provider>
        </ShopsContext.Provider>
    )
}
export { ShopsContext, ShopsProvider, dispatchContext }