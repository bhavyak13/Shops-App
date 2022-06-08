import React from 'react'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Shop = (props) => {
    const { name, area, category, startDate } = props.shop;
    // const EditHandler=()=>{}
    const DeleteHandler=()=>{
        props.deleteShop(props.shop.id);
    }
    return (
        <div>
            {name} {area} {category} {months[startDate[1]-1]}
            {/* <button onClick={EditHandler}>Edit</button> */}
            <button onClick={DeleteHandler}>Delete</button>
        </div>
    )
}
export default Shop;