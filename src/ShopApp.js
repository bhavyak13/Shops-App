import React, { useState } from 'react'
import ShopList from './ShopList';
import Navbar from './Navbar';
import useStyles from './Styles/ShopAppStyles'
import { ShopsProvider } from './ShopsContext';

const ShopApp = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        <ShopsProvider>
            <Navbar open={open} setOpen={setOpen}/>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.shops}>
                        <ShopList />
                    </div>
                </div>
            </div>
        </ShopsProvider>
    )
}
export default ShopApp;