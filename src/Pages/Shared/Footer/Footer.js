import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  const date = new Date().getFullYear();
  

  return (
    <footer className='mx-5 bg-slate-500 mb-12'>
      <div className="footer  text-white">
        <div className="mt-[74px] ml-36 lg:ml-20">
          <span className="footer-title">Services</span>
          <Link to='/' className="link link-hover text-lg">Emergency Checkup</Link>
          <Link to='/' className="link link-hover text-lg">Monthly Checkup</Link>
          <Link to='/' className="link link-hover text-lg">Weekly Checkup</Link>
          <Link to='/' className="link link-hover text-lg">Deep Checkup</Link>
        </div>
        <div className="mt-[74px] ml-36">
          <span className="footer-title">Company</span>
          <Link to='/' className="link link-hover text-lg">Fluoride Treatment</Link>
          <Link to='/' className="link link-hover text-lg">Cavity Filling</Link>
          <Link to='/' className="link link-hover text-lg">Teath Whitening</Link>
        </div>
        <div className="mt-[74px] ml-36">
          <span className="footer-title">Legal</span>
          <Link to='/' className="link link-hover text-lg">OUR ADDRESS</Link>
          <p className="text-lg">New York - 101010 Hudson</p>
        </div>
      </div>
      <div className="text-center mt-24">
        <p className="text-lg pb-16 text-white">Copyright © {date} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
