/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div id="fancy-form">
   <div class="container">
    <div class="form-sections">
      <div class="Form-left">
        <h1>Get In Touch</h1>
        <div class="line"></div> 
        <p>Contact us for latest news and updates. subscribe our news letter</p>

        <h4>ADDRESS</h4>
         <span>123, Main Street, New York 1001</span>
         

        <h4>PHONE</h4>
         <span>(+1)123 456 7890</span>
         

        <h4>EMAIL</h4>
         <span>Johndoe@gmail.com</span>
          

          <a href="/" class="fa fa-facebook"></a>
          <a href="/" class="fa fa-twitter"></a>
          <a href="/" class="fa fa-google"></a>
          <a href="/" class="fa fa-linkedin"></a>
          <a href="/" class="fa fa-youtube"></a>
      </div>

      <div class="Form-right">
        <h1>Contact Us</h1>
        <div class="line"></div>
        <form action="">
          <h5>NAME</h5>
          <input type="text"/>
          <h5>EMAIL</h5>
          <input type="email"/>
          <h5>PHONE</h5>
          <input type="number"/>
          <h5>YOUR MESSAGE</h5>
          <textarea name="" id="" cols="50" rows="7"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
    </div>
  </div>
    </div>
  );
}

export default Contact;
