import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import Merch from './Components/Merch';
import About from './Components/About';
import About2 from './Components/About2';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import rabbansGymLogo from './images/rabbansGymLogo.png';
import daveB2 from './images/daveB2.png';
import aboutImage from './images/about.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ScrollToTop />
      <Feature />
      <About
        image={daveB2}
        image2={rabbansGymLogo}
        title="YOUR PATH TO STRENGTH STARTS HERE"
        text="Forge your body into a weapon, in the flame of your own will"
        text2="Hard training, proper diet, enough rest. Those are the keys to strenght, it is up to you to take the challenge"
      />
      <Offer />
      <Merch />
      <About2
        image={aboutImage}
        title="GET TO KNOW US"
        text="Seven years in making, our gym has trained numerous professional bodybuilders, fighters and champions."
        text2="Our staff is comprised of highly motivated trainers, nutritionists, chiropractors and wellness experts, here at your service to provide you with the very best of strength development training."
        text3="For more information, please contact your local Mentat"
       />
      <Contact />
      <Footer />
      <CookieConsent
        style={{padding: "50px", fontSize: "18px"}}
        buttonStyle={{backgroundColor: "#ff1414", color: "#fff", fontSize: "18px", borderRadius: "10px", padding: "10px 20px"}}
        buttonText="I Understand"
        expires={365}
        cookieName="RabbansGym_Cookie_Consent"
      >
        This website uses cookies to improve your browsing experience <br /><br />
        By clicking on "I Understand" button, you agree to use the website's cookies
      </CookieConsent>
    </div>
  );
}

export default App;
