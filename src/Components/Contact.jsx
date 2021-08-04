import React from 'react';


function Contact(){
  return(
    <div id="contact">
      <h2>So what are you waiting for?</h2>
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder="Your full name" required />
        <input type="email" placeholder="Your E-mail" required />
        <textarea placeholder="Your message" name="message"></textarea>
        <input type="submit" value="SEND" />
      </form>
    </div>
  );
}

export default Contact;
