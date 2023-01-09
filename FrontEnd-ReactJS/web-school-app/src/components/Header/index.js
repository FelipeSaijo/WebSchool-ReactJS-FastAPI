import './Header.css'
import { AiOutlineMenu } from "react-icons/ai";
import { IoBook } from "react-icons/io5";

const Header = () => {
    return(
        <header className="header">
            <div className='header__container'>
                <div>
                    <nav>
                        <AiOutlineMenu size={32}/>
                    </nav>
                </div>
                <div>
                    <h1><IoBook size={25}/> Web School</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;