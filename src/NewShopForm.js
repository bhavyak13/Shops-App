import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DropDown from './DropDown';
import DateChooser from './DateChooser';
import useStyles from './Styles/NewShopFormStyles';
import { areas, categories } from './Helpers';



function NewShopForm(props) {
    //intials
    const classes = useStyles();
    const { open, setOpen, addShop } = props;
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());
    const [nameError, setNameError] = useState(false);
    const [areaError, setAreaError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');

    //hooks
    useEffect(() => {
        const letters = /[A-Za-z,' ']/g;
        if (name === '') {
            setNameError(true);
            setNameErrorMessage('Name is required');
        } else if (name.match(letters).length !== name.length) {
            setNameError(true);
            setNameErrorMessage('Only alpabets are required!');
        }
        else {
            setNameError(false);
        }
        area === '' ? setAreaError(true) : setAreaError(false);
        category === '' ? setCategoryError(true) : setCategoryError(false);
    }, [area, name, category])

    //handlers
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setName('');
        setArea('');
        setCategory('');
    };
    const addShopHandler = () => {
        if (nameError || areaError || categoryError) return;
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
            <div onClick={handleClickOpen} style={{ cursor: 'pointer' }}>
                New Shop
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth >
                <DialogTitle >Add New Shop..</DialogTitle>
                <DialogContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <div className={classes.name}>
                        <TextField
                            error={nameError}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Shop Name"
                            type="email"
                            fullWidth
                            variant="standard"
                            placeholder='name..'
                            value={name}
                            onChange={changeHandler}
                            helperText={nameError ? nameErrorMessage : ''}
                        />
                    </div>
                    <div className={classes.dropdown}>
                        <DropDown name='Area' items={areas} st={area} setSt={setArea} err={areaError} />
                    </div>
                    <div className={classes.dropdown}>
                        <DropDown name='Category' items={categories} st={category} setSt={setCategory} err={categoryError} />
                    </div>
                    <div className={classes.dropdown}>
                        <label htmlFor='start'>Opening Date : </label>
                        <DateChooser date={startDate} setDate={setStartDate} validator={false} id='start' />
                    </div>
                    <div className={classes.dropdown}>
                        <label htmlFor='close'>Closing Date : </label>
                        <DateChooser validator={true} date={finishDate} setDate={setFinishDate} id='close' />
                    </div>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className={`btn btn-secondary`} >Cancel</button>
                    <button onClick={addShopHandler} className={`btn btn-success`} >Add Shop!</button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default NewShopForm;