import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    // const {user, singInUseingGoogle} = useFirebase();
    const {singInUseingGoogle} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop ';

    const handleGoogleLogin = () =>{
        singInUseingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }


    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form action="">
                    <input type="email" id='' placeholder='Your Email' />
                    <br />
                    <input type="password" name='' id='' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Accout</Link></p>
                <div>-------or--------</div>
                <button 
                className="btn-regular"
                onClick={handleGoogleLogin}
                >Google sing in</button>
            </div>
        </div>
    );
};

export default Login;