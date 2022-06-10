import React, { useContext } from 'react'
import Shop from './Shop';
import { ShopsContext } from './ShopsContext';

function ShopList() {
    const shops = useContext(ShopsContext);
    return (
        <>
            {shops.map(shop => (
                <Shop
                    key={shop.id}
                    id={shop.id}
                />
            ))}
        </>
    )
}
export default ShopList;