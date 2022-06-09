import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    select:{
        width:'33%'
    }
})

export default function DropDown(props) {
    const { name, items,err } = props;
    //items=[names..]
    const {st, setSt} = props;

    const handleChange = (event) => {
        setSt(event.target.value);
    };

    const classes=useStyles();
    return (
        <Box >
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={st}
                label={name}
                onChange={handleChange}
                className={classes.select}
                error={err}
            >
                {items.map(q => (
                    <MenuItem key={q} value={q}>{q}</MenuItem>
                ))}
            </Select>
        </Box>
    );
}
