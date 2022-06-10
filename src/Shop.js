import React, { useContext } from 'react'
import CardComp from './Card';
import { dispatchContext, ShopsContext } from './ShopsContext';

const Shop = (props) => {
    
    //initials
    const shops = useContext(ShopsContext);
    const dispatch = useContext(dispatchContext);
    const id = props.id;
    const shop = shops.filter(s => s.id === id);
    const { name, area, category, startDate, finishDate } = shop[0];
    
    //handlers
    const deleteHandler = () => {
        dispatch({ type: 'delete', id })
    }

    //return
    return (
        <div style={{ display: 'inline-block', width: '100%', marginTop: '2rem' }}>
            <CardComp
                name={name}
                area={area}
                category={category}
                startDate={startDate}
                finishDate={finishDate}
                deleteHandler={deleteHandler}
            />
        </div>
    )
}
export default Shop;