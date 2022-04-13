import React,{useState} from 'react'
import '../style/contact.css'
import {db} from '../firebase'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };


    return (
        <div className="contact" id="contact">
          <h1>Contact</h1>
        <div className="contact__container">
        <div className="con__grid">
        <div className="con__info">

        <div className="con__heading">
        <h1>Get in touch, let's talk.</h1>
        <p>Fill in the details and feel free to connect with me.</p>
        </div>

        <div className="con__details">
        <ul>
          <li>
            <PhoneIcon/>
            <p>+92 3043552768</p>
          </li>
          <li>
            <EmailIcon/>
            <p>hdobitaylor@gmail.com</p>
          </li>
          <li>
            <LocationOnIcon/>
            <p>Lahore, Pakistan</p>
          </li>
        </ul>
        </div>
        <div className="con__social__icon">
        <ul>
          <li><AiFillGithub className="con__icons" size="35"/></li>
          <li><AiFillLinkedin className="con__icons" size="35"/></li>
          <li><FaFacebook className="con__icons" size="32"/></li>
        </ul>
        </div>
    </div>
    <div  className="con__form">
    <form className="form" onSubmit={handleSubmit}>
      <p>Your Name</p>
      <input
       
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Email</p>
      <input
      
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Message</p>

      <textarea
        
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>


      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Send Message
      </button>
    </form>
    </div>
        </div>
        </div>
        </div>
    )
}

export default Contact
