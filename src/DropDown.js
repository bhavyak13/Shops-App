import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function DropDown(props) {
    const { name, items } = props;
    //items=[names..]

    const {st, setSt} = props;

    const handleChange = (event) => {
        setSt(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={st}
                label={name}
                onChange={handleChange}
            >
                {items.map(q => (
                    <MenuItem key={q} value={q}>{q}</MenuItem>
                ))}
            </Select>
        </Box>
    );
}
