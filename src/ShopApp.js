import React, { useEffect, useState } from 'react'
import ShopList from './ShopList';
import { v4 as uuid } from 'uuid';
import Navbar from './Navbar';
import useStyles from './Styles/ShopAppStyles'

const ShopApp = () => {
    const [shops, setShops] = useState([
        {
            id: '1',
            area: 'thane',
            category: 'dairy',
            name: 'Dairy Shop1',
            startDate: ['1', '3', '2015'],
            finishDate: ['4', '5', '2019'],
        },
        {
            id: '2',
            area: 'mumbai',
            category: 'dairy',
            name: 'Dairy Shop2',
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
    const filters = ['None', 'Area', 'Category', 'Open', 'Closed'];
    const [filter, setFilter] = useState('');
    let filteredShops = shops;
    useEffect(() => {
        // filteredShops=shops.filter(shop=>shop.)
    }, [filter, shops]);
    const classes = useStyles();
    return (
        <>
            <Navbar open={open} setOpen={setOpen} addShop={addShop} filter={filter} setFilter={setFilter} filters={filters} />
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.shops}>
                        <ShopList shops={filteredShops} deleteShop={deleteShop} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopApp;
