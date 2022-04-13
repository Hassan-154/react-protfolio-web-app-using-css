import React from 'react'
import '../style/headerSection.css'
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { HashLink as Link } from "react-router-hash-link";
import Typical from 'react-typical'
import { motion } from 'framer-motion';
function HeaderSection() {
  return (
    <div className="header" id="home">
    <div className="main__block">
    <div className="first__block">
    <div className="header__back__img"></div>
    <div className="header__content">
      <h1>I'm <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          'Hdobi Taylor',
          1000,
        ]}
      /></h1>
<motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.7}}
        >"I design and develop experiences that make people's lives simple."</motion.p>
      <ul>
        <li><a className="one" onClick={()=> window.open("https://github.com/Hassan-154", "_blank")}><AiFillGithub className="single_icon" size="63"/></a></li>
        <li><a className="two" onClick={()=> window.open("https://github.com/Hassan-154", "_blank")}><AiFillLinkedin  className="single_icon" size="63" /></a></li>
        <li><a className="three" onClick={()=> window.open("https://www.instagram.com/hassanbajwa_154/", "_blank")}><FaFacebook  className="single_icon" size="61"/></a></li>
      </ul>
    </div>
    </div>
    <div className="second__block">
    <div className="circle"></div>
    <div className="circle__content">
      <h1>Frontend Developer</h1>
    </div>
    </div>
    </div>
    <div className="button__block">
      <Link  smooth to="#about">
      <div class="scroll-down"></div>
      </Link>
    </div>
    </div>
  )
}

export default HeaderSection
