import React from 'react';
import{ GoogleOutlined , FacebookFilled} from '@ant-design/icons';

import { auth } from '../firebase';
import firebase from "firebase/app";
import logo from '../image/logo.png';


const Login = () =>{
    return(
        <div id="login-page">
            <div id="login-card">
                <img className="mini-logo" src={logo} alt="logo"/>
                <h2>Welcome to ZyZy - Chat App</h2>
                <div 
                className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br/><br/>
                <div className="login-button facebook"
                onClick={() => auth.signInWithRedirect (new firebase.auth.FacebookAuthProvider())}>
                <FacebookFilled /> Sign In with Facebook
                </div>
                <p>Made by Ashutosh</p>
            </div>
        </div>

    );
}
export default Login;