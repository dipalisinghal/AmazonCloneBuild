import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase1';
import { useStateValue } from './StateProvider';

export default function Header() { 
    //const [state, dispatch] = useStateValue();    
    //const [{ basket=[]}, dispatch] = useStateValue();  //basket is empty
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(basket);

    const handleAuthentication = () => {
        if (user) { auth.signOut(); }
       
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="logo-container">
                         <Link to="/" id="HomeLink" className="Link">
                        <div className="logo">
                           
                            <img className="logoImage" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
                            <div className="in">
                                .in
                                </div>
                          
                            </div>
                        </Link>
                        
                    </div>
                    <div className="adress-container">
                        <div className="hello">
                            Hello
                        </div>
                        <div className="selectAdress">
                            Select your address
                        </div>
                    </div>
                    <div className="search-container">
                        <select className="selectionbox">
                            <option>All</option>
                        </select><input type="text" className="searchbox" placeholder="Amazon India Online Shopping" /><button className="submitsearch" type="submit"><i className="fa fa-search"></i></button>

                    </div>
                    <div className="nationality">
                        <div className="nation">ind</div>
                        <div className="lang">EN</div>
                        <div className="landiv">
                            <select className="selectionlang">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="account-container">
                        <Link to={!user && "/login" } id="signInLink" className="Link" >
                            <div className="signin" onClick={handleAuthentication}>
                                <span>Hello {user && `${user.email}`}  </span>
                                <span>{user? "Signout": "Signin"}</span>
                            </div>
                        </Link>
                        <div className="accounts">
                            Accounts & Lists
                            <select className="selectionlang">
                                <option></option>
                            </select>
                            </div>
                        

                    </div>
                    <div className="returnsorder-container">
                        <Link to="/login" id="ReturnsLink" className="Link" >
                        <div className="returns">
                            Returns
                        </div>
                        <div className="order">
                            & Order
                        </div>
                            </Link>
                    </div>

                    <div className="cart-container" >
                        <Link to="/checkout" id="cartLink" className="Link" >
                            <span className="cartText">
                                Orders in cart: 
                            </span>
                            <span className="ItemsInCart">
                                {basket?.length}
                            </span>
                        </Link>
                    </div>

                </div>
            </header>
            <div className="nav">
            </div> 
           
            
            </>
        )
}

//  {basket.length }