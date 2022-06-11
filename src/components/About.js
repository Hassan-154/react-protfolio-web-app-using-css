import React from 'react'
import {Grid} from '@material-ui/core'
import { AiOutlineArrowRight,AiFillHtml5,AiFillGithub } from 'react-icons/ai';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiTailwindcss,SiNextdotjs,SiFirebase } from 'react-icons/si';
import { DiCss3,DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import nextLogo from '../images/nextjs.png'
import figmaLogo from '../images/figma.png'
import xdLogo from '../images/xd.png'
import muiLogo from '../images/mui.png'
import '../style/about.css'
function About() {
    return (
        <div className="about" id="about">
        <h1>About Me.</h1>
        <div className="about__container">
        <p>I am currently a 3rd year university student majoring in Computer Science and Engineering.</p>
        <div className='about__grid'>
        <Grid lg={12} item container spacing={5}>
        <Grid item lg={4} sm={4} xs={12}>
        <h2>Contact</h2>
        <p>To get in touch with me, shoot a mail</p>
        <h2>Job Opportunities</h2>
        <p>I'm currently looking for an internship, If you see me as a good fit, check my <a onClick={()=> window.open("https://hassan-154.github.io/sports-web/", "_blank")}>Resume</a> and I'd love to work with you.</p>
        <h2>Social Links
        </h2>

        <div className='social__Links'>
            <AiOutlineArrowRight size={20}/><a onClick={()=> window.open("https://hassan-154.github.io/sports-web/", "_blank")}>Facebook</a>
        </div>
        <div className='social__Links'>
            <AiOutlineArrowRight size={20}/><a onClick={()=> window.open("https://hassan-154.github.io/sports-web/", "_blank")}>GitHub</a>
        </div>
        <div className='social__Links'>
            <AiOutlineArrowRight size={20}/><a onClick={()=> window.open("https://hassan-154.github.io/sports-web/", "_blank")}>Instagram</a>
        </div>
        <div className='social__Links'>
            <AiOutlineArrowRight size={20}/><a onClick={()=> window.open("https://hassan-154.github.io/sports-web/", "_blank")}>LinkedIn</a>
        </div>
        <div className='social__Links'>
            <AiOutlineArrowRight size={20}/><a onClick={()=> window.open("https://drive.google.com/file/d/1uEV17BjH2AGfgcOWZ3WzBscphJUUQiB8/view?usp=sharing", "_blank")}>Twitter</a>
        </div>

        </Grid>
        <Grid item lg={8} sm={8} xs={12}>
        <p>Experienced Member with a demonstrated history of working in the non-profit organization management industry. I'm Skilled in HTML5, CSS3, Javascript, jQuery, React, Firebase, MySQL, BootStrap, Java, C Programming, C++, Data Structures. I have recently started UI/UX Designing and have a piece of good knowledge of Figma and Adobe XD. Strong operations professional with a Bachelor's degree focused in Computer Science from The LNM Institute of Information Technology, Jaipur Rajasthan. Apart from these things, I love to read novels, listen to rap music, play sports like basketball and cricket, and also like to do cycling.</p>
       <div className='social'>
       
        {/* here i am adding the icons of my skills */}
        <div className='skills__icons'>
        <h1>Tech Stack</h1>
       <div className='skills__collection'>
       <BsFillBootstrapFill size={90} className="skills__single__icon bootstrap"/>
        <AiFillHtml5 size={90} className="skills__single__icon html"/>
        <DiCss3 size={90} className="skills__single__icon css"/>
        <FaReact size={90} className="skills__single__icon react"/>
        <AiFillGithub size={90} className="skills__single__icon git"/>
        <SiFirebase size={90} className="skills__single__icon firebase"/>
        <DiJavascript1 size={90} className="skills__single__icon java"/>
        <SiTailwindcss size={90} className="skills__single__icon tailwind"/>
        <img src={nextLogo} alt="nextjs" className="skills__single__icon next__logo" />
        <img src={figmaLogo} alt="figma" className="skills__single__icon figma" />
        <img src={xdLogo} alt="xd" className="skills__single__icon xd"/>
        <img src={muiLogo} alt="mui" className="skills__single__icon mui" />
       </div>
        </div>
       </div>
        </Grid>
        </Grid>
        </div>
        </div>
        </div>
    )
}

export default About
