import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="p-24 bg-base-300 text-base-content">
      <div className="footer">
        <div>
          <span className="footer-title text-xl">Services</span>
          <a href="/" className="link link-hover text-lg">
            Branding
          </a>
          <a href="/" className="link link-hover text-lg">
            Design
          </a>
          <a href="/" className="link link-hover text-lg">
            Marketing
          </a>
          <a href="/" className="link link-hover text-lg">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title text-xl">Legal</span>
          <a href="/" className="link link-hover text-lg">
            Terms of use
          </a>
          <a href="/" className="link link-hover text-lg">
            Privacy policy
          </a>
          <a href="/" className="link link-hover text-lg">
            Cookie policy
          </a>
        </div>
        <div>
          <span className="footer-title text-xl">Explore</span>
          <a href="/" className="link link-hover text-lg">
            Features
          </a>
          <a href="/" className="link link-hover text-lg">
            Enterprise
          </a>
          <a href="/" className="link link-hover text-lg">
            Security
          </a>
          <a href="/" className="link link-hover text-lg">
            Pricing
          </a>
        </div>
        <div>
          <span className="footer-title text-xl">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/tanushri-das-06a520194/"
              target="_blank"
            >
              <FaLinkedin
                className="text-4xl"
                style={{ color: "#0A66C2" }}
              ></FaLinkedin>
            </a>
            <a
              href="https://www.youtube.com/watch?v=ZvggB9FT4gM&ab_channel=MuseumofFineArts%2CBoston"
              target="_blank"
            >
              <FaYoutube
                className="text-4xl"
                style={{ color: "#FF0000" }}
              ></FaYoutube>
            </a>
            <a href="https://www.facebook.com/tanushri.das01?mibextid=ZbWKwL" target="_blank">
              <FaFacebook
                className="text-4xl"
                style={{ color: "#4267B2" }}
              ></FaFacebook>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-24">
        <p className="text-xl text-indigo-500 font-semibold">Copyright © {date} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
