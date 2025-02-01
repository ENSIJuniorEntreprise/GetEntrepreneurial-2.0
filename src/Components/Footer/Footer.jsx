import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import imageenvoie from "./../../Assets/Mask group.png"

import logo from "./../../Assets/new.png"
function Footer() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="form-container1">
      <div className="form-container10">
      <div className="form-line1"></div>
      <h2 className="form-title1">Restez en Contact avec Nous</h2>
      <div className="form-line1"></div>
      </div>
      <form className="contact-form1">
        <input
          type="text"
          className="form-input1"
          placeholder="Nom et Prénom"
          required
        />
        <input
          type="email"
          className="form-input1"
          placeholder="Addresse Email"
          required
        />
        <textarea
          className="form-input1"
          id="messagee"
          placeholder="Message..."
          required
        ></textarea>
        <button type="submit" className="form-btn1">
          <i className="send-icon1"><img src={imageenvoie} alt="" /></i>
        </button>
      </form>
    </div>
      <div className="footer_container">
        <div className="part111">

          <img src={logo} alt="logo" className="logo-img1" />
          <div className="para">
            <span className="slogann">#Forge_The_Future</span>
          </div>

        </div>


        <div className="lien part22">
        <h3>PAGES</h3>
          <ul className="footer-ul">
            <li>
              <a className="footer-a" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="footer-a" href="/Program">
                About
              </a>
            </li>
            <li>
              <a className="footer-a" href="/Collab">
                Glance
              </a>
            </li>
            <li>
              <a className="footer-a" href="/Register">
                Registration
              </a>
            </li>
          </ul>
        </div>




        <div className="footer-contact lien">
          <h3>CONTACTEZ NOUS</h3>
          <div className="span">
            <span className="footer-span">29 903 814</span>

            <a href="mailto:contact.junior.ensi@gmail.com">
              <span className="footer-span mail">contact.junior.ensi@gmail.com</span>
            </a> 

            <a href="mailto:commercial.junior.ensi@gmail.com">
              <span className="footer-span mail">commercial.junior.ensi@gmail.com</span>
            </a>
          </div>

          <div className="social">
            <a className="footer-a" href="https://www.facebook.com/ENSI.Junior.Entreprise">
              <FaFacebookF size={"25px"} className="icones" />
            </a>
            <a className="footer-a" href="https://www.instagram.com/ensijunior/">
              <BsInstagram size={"25px"} className="icones" />
            </a>
            <a className="footer-a" href="https://www.linkedin.com/company/ensi-junior-entreprise/">
              <BsLinkedin size={"25px"} className="icones" />
            </a>



          </div>

        </div>



      </div>




      <div className="copy">
        © All rights reserved - ENSI JE 2024
      </div>
    </div>
  );
}

export default Footer;
