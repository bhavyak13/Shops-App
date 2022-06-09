import React from 'react'
import CardComp from './Card';

const Shop = (props) => {
    const { name, area, category, startDate, finishDate } = props.shop;
    const DeleteHandler = () => {
        props.deleteShop(props.shop.id);
    }
    return (
        <div>
            <CardComp name={name} area={area} category={category}
                startDate={startDate}
                finishDate={finishDate}
            />
            <button onClick={DeleteHandler} className={'btn btn-danger'}>X</button>
        </div>
    )
}
export default Shop;