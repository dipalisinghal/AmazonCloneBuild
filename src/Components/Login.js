import React, { useState } from 'react'
import { auth } from './Firebase1'
import { useNavigate } from 'react-router-dom';
export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = e => {
        e.preventDefault();
        //firebase for login

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {

                console.log(auth);
                if (auth) {
                    navigate('/');
                }

            }).catch((error => {
                alert(error.message)

            }));

    }
    const register = e => {
        e.preventDefault();

        //do firebase register things
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                console.log(auth);
                if (auth) {
                    navigate('/');
                }

        }).catch((error => {
            alert(error.message)

        }));

       
    }

    return (
        <>
           
            <div className="login" >
                <img className="loginlogo" src="https://th.bing.com/th/id/OIP.78DnVGw7iS9tO4RiWwXXTgHaFj?pid=ImgDet&rs=1" />
                <div className="login_container">
                    <h1>Sign in</h1>
                    <form>
                        <h5>Email</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="login_signinbutton" onClick={signIn} >Sign in</button>
                      
                    </form>
                    <p>You are signing into amazon clone ore create a new account by lorem ipsumgdfdfds sgfsgfc svgs clicking on create new account below</p>
                    <button className="login_registerbutton" onClick={register}>create amazon account</button>
                </div>
            </div>
        </>
        )
}