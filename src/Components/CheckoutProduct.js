import React from 'react'
import { useStateValue } from './StateProvider'

export default function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    //console.log(id, title, image, price, rating);
    const removeFromBasket = () => {
        console.log({ id, title, image, price, rating });

        dispatch({
            type: "Remove_From_Basket",
            id: id,
            image: image,
        });
    }
    return (
        <div className="checkoutProduct">
            <img  className="checkoutImage" src={image} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">

                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">

                    {Array(rating).fill().map((_) => (
                        <p>⭐</p>
                    ))}

                </div>
                <button onClick={removeFromBasket }>Remove From Basket</button>
            </div>
        </div>
        )
}
