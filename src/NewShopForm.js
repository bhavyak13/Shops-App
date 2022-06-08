import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DropDown from './DropDown';
import DateChooser from './DateChooser';

const areas = ['Thane', 'Pune', 'Mumbai Suburban', 'Nashik', 'Nagpur', 'Ahmednagar', 'Solapur'];
const categories = ['Grocery', 'Butcher', 'Baker', 'Chemist', 'Stationery shop'];

function NewShopForm(props) {

    const { open, setOpen, addShop } = props;
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const addShopHandler = () => {
        const shop = {
            name,
            area,
            category,
            startDate: [startDate.getDate(), startDate.getMonth(), startDate.getFullYear()],
            finishDate: [finishDate.getDate(), finishDate.getMonth(), finishDate.getFullYear()],
        }
        addShop(shop);
        handleClose();
    }

    const changeHandler = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add New Shop!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="email"
                        fullWidth
                        variant="standard"
                        placeholder='Shop name..'
                        value={name}
                        onChange={changeHandler}
                    />
                    <DropDown name='Area' items={areas} st={area} setSt={setArea} />
                    <DropDown name='Category' items={categories} st={category} setSt={setCategory} />
                    <DateChooser date={startDate} setDate={setStartDate} validator={false} />
                    <DateChooser validator={true} date={finishDate} setDate={setFinishDate} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addShopHandler}>Add Shop!</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default NewShopForm;