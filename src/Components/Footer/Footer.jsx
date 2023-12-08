import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="Footer-container" id="about">
    <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Address</h3>
            <a href="googlemaplink">Lucknow, Uttar Pradesh</a>
          </div>
        <div className="box">
            <h3>Contact Us </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i className="fa">
                <a href="tel:+91 8888817886">+91 4363557535 </a></i>  
                <br></br>
                <i className="fa">
                <a href="mailto:1111dhruvsoni@gmail.com">1111dhruvsoni@gmail.com</a></i>
            </div>
        <div className="box">
            <h3>Follow us</h3>
            <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                     />
                <div className="hero1">
                <h1>Reach us at</h1>
                 <div className="home__social-icon">
                 <a href="Facebook"><i className="fab fa-facebook-f"> Facebook</i></a>
                 <a href="Instagram"><i className="fab fa-instagram"> Instagram</i></a>
                 <a href="Whatsapp link"><i className="fab fa-whatsapp">Whatsapp</i></a>
                 <a href="https://www.google.com/maps/">
                <i className="fab fa-google">Google Maps</i></a>
               </div>
            </div>
        </div> 
      </div>
    </section>
    <div className="credits">
        <p>© 2023 FitClub. All Rights Reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
