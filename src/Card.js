import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function CardComp(props) {
    const { name, area, category, startDate, finishDate } = props;
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div" style={{
                    display:'flex',
                    justifyContent:'space-between'
                }}>
                    {name}
                    <button onClick={props.deleteHandler} className={'btn btn-danger'}>X</button>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {area}
                </Typography>
                <Typography variant="body2">
                    Category : {category}
                    <br />
                    Opening : {startDate[0]} {months[startDate[1] - 1]} {startDate[2]}
                    <br />
                    Closing : {finishDate[0]} {months[finishDate[1] - 1]} {finishDate[2]}
                </Typography>
            </CardContent>
        </Card>
    );
}
