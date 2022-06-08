import React from 'react'
import Shop from './Shop';
function ShopList(props) {
    const { shops } = props;
    return (
        <div>
            {shops.map(shop => (
                <Shop
                    key={shop.id}
                    shop={shop}
                    deleteShop={props.deleteShop}
                />
            ))}
        </div>
    )
}
export default ShopList;