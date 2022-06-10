import { v4 as uuid } from 'uuid';
const ShopsReducer = (shops, action) => {
    switch (action.type) {
        case 'add':
            return ([...shops, { ...action.shop, id: uuid() }])
        case 'delete':
            return(shops.filter(shop => shop.id !== action.id));
        default:
            break;
    }
}
export default ShopsReducer;