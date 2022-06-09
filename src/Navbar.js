import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NewShopForm from './NewShopForm';

const Navbar = (props) => {
    const { filter, setFilter } = props;
    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ShopApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <NewShopForm open={props.open} setOpen={props.setOpen} addShop={props.addShop} />
                        <FormControl style={{ marginLeft: 'auto', width: '180px' }}>
                            <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filter}
                                label="Age"
                                onChange={handleChange}
                            >
                                {props.filters.map(e => (
                                    <MenuItem key={e} value={e}>{e}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;