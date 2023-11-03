import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import Checkout from './Components/Checkout'
// import Login from './Login'
import React, { useEffect, useState } from 'react'
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { auth } from './Components/Firebase1';
function App() {
    //let [count, setCount] = useState(0);
    //const countAfterClick = () => {
    //    var sumcount = count++;

    //    setCount(sumcount);



    //}
    const [{ }, dispatch] = useStateValue();
    useEffect(() => {
        //will only run once when app component loads..
        auth.onAuthStateChanged(authUser => {
            console.log("this user is : "+ authUser);
            if (authUser) {
                //user just logged in or was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }
            else {
                //user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])

    return (

      <>
          <Router>
                <Routes>
                    <Route path="/login" element={<Login />}>   </Route>
                    <Route path="/checkout" element={[< Header />, <Checkout />]} > </Route>
                    <Route path="/" element={[<Header />, <Home />]}>  </Route>
              
              </Routes>
          </Router>
      </>
  );
}

export default App;


//solve the error that form package.json file and AmazonClineReact/amazonclonereact/nodemodule k eslint dono match hain, means 2 eslint files are there. so i remove from nodemodules folder, which is in recycle bin
//eslint-config  react app. and keep eslint config in package.json
/* count={count} countAfterClick={countAfterClick}*/
/*count={count} countAfterClick={countAfterClick}*/ 