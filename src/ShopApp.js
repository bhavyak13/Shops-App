import React, { useState } from 'react'
import ShopList from './ShopList';
import NewShopForm from './NewShopForm';
import { v4 as uuid } from 'uuid';


const ShopApp = () => {
    const [shops, setShops] = useState([
        {
            id: '1',
            area: 'thane',
            category: 'blabal',
            name: 'Dahi',
            startDate: ['1', '3', '2015'],
            finishDate: ['4', '5', '2019'],
        },
        {
            id: '2',
            area: 'thane',
            category: 'blabal',
            name: 'Dahi',
            startDate: ['1', '3', '2015'],
            finishDate: ['4', '5', '2019'],
        },
    ]);
    const [open, setOpen] = useState(false);

    const addShop = (shop) => {
        const newShop = { ...shop, id: uuid() };
        setShops([...shops, newShop]);
    }
    const deleteShop = (id) => {
        const newShop = shops.filter(shop => shop.id !== id);
        setShops(newShop);
    }
    // console.log(shops);
    return (
        <>
            <ShopList shops={shops} deleteShop={deleteShop} />
            <NewShopForm open={open} setOpen={setOpen} addShop={addShop} />
        </>
    )
}
export default ShopApp;