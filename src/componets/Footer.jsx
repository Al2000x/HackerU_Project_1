import React from "react";
import "../css_work/footer.css";
import { SocialIcon } from 'react-social-icons';
//very useful extention which automatically ads a social icon depending on the given url
const Footer = () => {
const socialLinksArray = [ "https://github.com/Al2000x",
"https://twitter.com/al2000x", 
"https://www.linkedin.com/in/alex-kiochukov-81411a241/",
"https://www.instagram.com/a_l_e_x________is__me/",
"https://www.facebook.com/alex.kiochukov"];
  return (
    <section className="footer">
      <footer>
        <div className="sm-handle">
          <a className="m-2">
          <SocialIcon className="l-icone" url="https://github.com/Al2000x" target={"_blank"} />
          </a >
          
          <a className="m-2">
           <SocialIcon className="l-icone" url="https://twitter.com/al2000x" target={"_blank"} />
          </a>
          <a  className="m-2">
          <SocialIcon className="l-icone" url="https://www.linkedin.com/in/alex-kiochukov-81411a241/" target={"_blank"} />
          </a>

          <a  className="m-2">
          <SocialIcon className="l-icone" url="https://www.instagram.com/a_l_e_x________is__me/" target={"_blank"} />
          </a>

          <a className="m-2">
          <SocialIcon className="l-icone" url="https://www.facebook.com/alex.kiochukov" target={"_blank"} />
          </a>
        </div>

        <div className="footer-links">
          <div ClassName="menu">
            <h4 ClassName="menu-title">Menu</h4>
            <a href="#" ClassName="menu-links">
             
            </a>
            <a href="#" ClassName="menu-links">
              My Blogs
            </a>
            <a href="#" ClassName="menu-links">
              My Journey
            </a>
            <a href="#" ClassName="menu-links">
              About
            </a>
          </div>
          <div ClassName="menu">
            <h4 ClassName="menu-title">Other Pages</h4>
            <a href="#" ClassName="other-links">
              Contact Us
            </a>
            <a href="#" ClassName="other-links">
              Privacy Policy
            </a>
            <a href="#" ClassName="other-links">
              FAQ
            </a>
            <a href="#" ClassName="other-links">
              Terms of use
            </a>
          </div>
        </div>

        <p ClassName="copyright">
         
          <a> A website created by Alex Kiochukov</a>
        </p>
      </footer>
    </section>
  );
};

export default Footer;
