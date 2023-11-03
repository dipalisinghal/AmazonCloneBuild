import React from 'react'
//export { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider';

export default function Subtotal({ total }) {
   // let [{ total }] = useStateValue();
    //dispatch function
    //const [{ basket, total }, dispatch] = useStateValue();
    //const addToBasket = () => {
    //    dispatch({
    //        type: 'Total_Basket',
    //        item: {
               
    //            total: total+ price,
               

    //        },
    //    });
    //};
    return (
        <div className="subtotal_box">
        <div className="subtotal" >
                <h3 className="subtotal_heading">Your Subtotal is: </h3>
                < h4 className="subtotal_amount">{total}</h4>
            
            </div>
            <button className="subtotal_button">Proceed to Checkout</button>
        </div>
    );
}