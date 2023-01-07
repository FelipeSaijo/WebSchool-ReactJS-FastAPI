import { useState } from "react";
import axios from "axios";
import InputArea from '../InputArea';
import './SignIn.css'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = (event) => {
        event.preventDefault();
        setEmail(event.target[0].value);
        setPassword(event.target[1].value);
    }

    if (email!== '' && password !== '') {
        axios.post('http://localhost:8000', {
            email: email,
            password: password
        })
        .catch = (err) => {
            console.log(err);
        }
    }


    return(
        <div className="formulary">
            <form onSubmit={Login}>
                <span>Login</span>
                <div>
                    <InputArea 
                        labeltext='E-mail'
                        type='email'
                        placeholder='exemplo@gmail.com'
                    />
                    <InputArea
                        labeltext='Password'
                        type='password'
                        placeholder='Insert your password'
                    />
                </div>
                <button type="submit">Sign In</button>
                <a href="/signup">Create account</a>
            </form>
        </div>
    );
}

export default SignIn