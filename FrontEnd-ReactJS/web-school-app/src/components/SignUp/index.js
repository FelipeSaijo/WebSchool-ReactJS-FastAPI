import InputArea from '../InputArea';
import './SignUp.css'

const SignUp = () => {
    return(
        <div className="formulary">
            <form>
                <span>Sign-In</span>
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
                <a href="/signup">Sign-Up</a>
            </form>
        </div>
    );
}

export default SignUp