import React from "react";
import "../css_work/footer.css";
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
    <section class="footer">
      <footer>
        <div class="sm-handle">
          <a className="m-2">
          <SocialIcon url="https://github.com/Al2000x" target={"_blank"} />
          </a >
          <a className="m-2">
           <SocialIcon url="https://twitter.com/al2000x" target={"_blank"} />
          </a>
          <a  className="m-2">
          <SocialIcon url="https://www.linkedin.com/in/alex-kiochukov-81411a241/" target={"_blank"} />
          </a>

          <a  className="m-2">
          <SocialIcon url="https://www.instagram.com/a_l_e_x________is__me/" target={"_blank"} />
          </a>

          <a className="m-2">
          <SocialIcon url="https://www.facebook.com/alex.kiochukov" target={"_blank"} />
          </a>
        </div>

        <div class="footer-links">
          <div class="menu">
            <h4 class="menu-title">Menu</h4>
            <a href="#" class="menu-links">
             
            </a>
            <a href="#" class="menu-links">
              My Blogs
            </a>
            <a href="#" class="menu-links">
              My Journey
            </a>
            <a href="#" class="menu-links">
              About
            </a>
          </div>
          <div class="menu">
            <h4 class="menu-title">Other Pages</h4>
            <a href="#" class="other-links">
              Contact Us
            </a>
            <a href="#" class="other-links">
              Privacy Policy
            </a>
            <a href="#" class="other-links">
              FAQ
            </a>
            <a href="#" class="other-links">
              Terms of use
            </a>
          </div>
        </div>

        <p class="copyright">
         
          <a> A website created by Alex Kiochukov</a>
        </p>
      </footer>
    </section>
  );
};

export default Footer;
