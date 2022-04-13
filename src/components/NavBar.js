import React,{useState} from 'react'
import '../style/navbar.css'
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { HashLink as Link } from "react-router-hash-link";
function NavBar() {
    const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click);
    return (
        <div className="navbar" id="navbar">
        <div className={click ? "navbar__container":"navbar__container__mobile"}>
            <ul>
                <li><a><Link onClick={handleClick} smooth to="#home" >HOME</Link></a></li>
                <li><a><Link onClick={handleClick} smooth to="#about" >about</Link></a></li>
                <li><a><Link onClick={handleClick} smooth to="#projects" >PROJECTS</Link></a></li>
                <li><a><Link onClick={handleClick} smooth to="#contact" >contact</Link></a></li>
            </ul>
        </div>
        <div className="menu__icon" onClick={handleClick}>
           {click ? <FiMenu size="30"/> : <ImCross size="25"/>}
            </div>
        </div>
    )
}

export default NavBar
