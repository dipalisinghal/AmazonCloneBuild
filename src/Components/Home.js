import React from 'react'
import Product from './Product'


export default function Home(/*props*/) {
    return (
        <>
      <div>
                <img className="Homeimage" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/0-PC_Hero_2x._CB594150943_.jpg" alt="image" />
                <div className="home_row">
                    <Product id="121" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" price={1700} rating={5}
                        image="https://m.media-amazon.com/images/I/81hdfTnfSHL._AC_SY200_.jpg" />
                    <Product id="122" title="Robin Sharma book" price={250} rating={3}
                        image="https://qph.fs.quoracdn.net/main-qimg-cf9632bf4706a005c904b476761375e2" />
                    <Product id="126" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" price={56000} rating={3}
                        image="https://m.media-amazon.com/images/I/61-xhMpd8iL._AC_SY200_.jpg" />
                  
                </div>
                <div className="home_row">
                    <Product id="121" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" price={150} rating={3}
                        image="https://m.media-amazon.com/images/I/812Jrsw5dKL._AC_SY200_.jpg" />
                    <Product id="122" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" price={105000} rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/711wsjBtWeL._AC_UL160_SR160,160_.jpg" />
                    <Product id="126" title="abcRobin Sharma book" price={220} rating={2}
                        image="https://qph.fs.quoracdn.net/main-qimg-cf9632bf4706a005c904b476761375e2" />
                    <Product id="126" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" price={3100} rating={4}
                        image="https://m.media-amazon.com/images/I/71eFDoRqVvL._AC_SY200_.jpg" />
                   
                </div>
                <div className="home_row">
                    <Product id="121" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" price={150} rating={3}
                        image="https://m.media-amazon.com/images/I/812Jrsw5dKL._AC_SY200_.jpg" />
                    </div>
               

            </div>


        </>
        )
}

//addtobasket={props.countAfterClick} 