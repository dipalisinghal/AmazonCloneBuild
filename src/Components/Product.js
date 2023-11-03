import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { useStateValue } from './StateProvider';

export default function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'Add_To_Basket',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
               
            },
            //total: total
            
        });
    };
    return (
        <>
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">

                        {Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))}
                      

                    </div>
                   
                </div>
                <img src={image} />
                <button onClick={addToBasket}>Add to Cart</button>
              
            </div>


        </>
    )
}

//onclick add to cart... what has to be increased? cart number 