import React from 'react';
import { Link } from 'react-router-dom';
// import '../Login/Login.css'

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder='Enter your email'/>
                    <br />
                    <input type="password" placeholder='your password' />
                    <br />
                    <input type="password" placeholder='Re-enter password'/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <div>-----or-----</div>
                <button className='btn-regular'>Google sing in</button>
            </div>
        </div>
    );
};

export default Register;