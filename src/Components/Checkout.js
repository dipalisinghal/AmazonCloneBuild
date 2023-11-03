import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

export default function Checkout() {
    const [{ basket , user}, dispatch] = useStateValue();
    return (
        <>
        <div className="checkout">
        <img className="checkoutbannerImage" src="https://th.bing.com/th/id/R.cca5ecb715b59419dff413415ba9c0e3?rik=fCw6n6Ue%2b1DBhA&riu=http%3a%2f%2fwww.staples.com%2fsbd%2fcre%2fproducts%2f140223%2f35252%2fimages%2f35252_lp.jpg&ehk=TLtZhBNg%2bmWP5feOA8uUBieyc2bv2GywiQlJfBO7%2fEY%3d&risl=&pid=ImgRaw&r=0" />


        {
            basket?.length === 0 ?
                (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                    </div>
                ) :
                (
                    <div>
                        <h2 className="checkout_title">Your shopping basket:</h2>

                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                                

                    </div>
                )
        }
            </div>
            <h4>hello {user?.email}</h4>
            <div>
                {basket.length > 0 &&  (
                    <Subtotal

                        total={basket?.reduce((amount, item) => item.price + amount, 0)}
                    />
                )}
            </div>
        </>
    //    {
    //    basket.length > 0 && (
    //        <div className="checkout_right" >
    //            <Subtotal />
    //        </div>
    //    ),
    //},
            );
    
}