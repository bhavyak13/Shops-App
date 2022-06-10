import React from 'react'
import NewShopForm from './NewShopForm';
const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">ShopApp</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <NewShopForm open={props.open} setOpen={props.setOpen} addShop={props.addShop} />

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;