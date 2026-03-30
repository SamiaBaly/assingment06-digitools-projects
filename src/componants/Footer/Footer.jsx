import { Camera, XCircle } from 'lucide-react';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#101727] ">
      <div className="container mx-auto">
        <footer className="footer grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 text-neutral-content pt-10">
          <nav className="flex flex-col justify-center items-center  mx-auto text-center">
            <h2 className="text-3xl font-bold">DigiTools</h2>
            <p className='text-center md:text-left lg:text-left'>
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </nav>
          <section className='md:col-span-4 grid grid-cols-3 justify-between  md:grid-cols-4 sm:container mx-auto gap-4 md:gap-2'>
            <nav className="flex flex-col justify-center items-center mx-auto text-center">
              <h6 className="footer-title">Product</h6>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Pricing</a>
              <a className="link link-hover">Templates</a>
              <a className="link link-hover">Integrations</a>
            </nav>
            <nav className="flex flex-col justify-center items-center mx-auto text-center">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About </a>
              <a className="link link-hover">Blog</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Press </a>
            </nav>
            <nav className="flex flex-col justify-center items-center mx-auto text-center">
              <h6 className="footer-title">Resources</h6>
              <a className="link link-hover">Documentation</a>
              <a className="link link-hover">Help Center</a>
              <a className="link link-hover">Community</a>
              <a className="link link-hover">Contact</a>
            </nav>
            <nav className="flex flex-col justify-center items-center mx-auto text-center">
              <h6 className="footer-title">Social Links</h6>
              <div className="flex justify-between items-center gap-4">
                <a className="link link-hover">
                  <Camera />
                </a>
                <a className="link link-hover text-2xl">
                  <FaFacebook></FaFacebook>
                </a>
                <a className="link link-hover">
                  <XCircle></XCircle>
                </a>
              </div>
            </nav>
          </section>
        </footer>

        <div className="divider">Neutral</div>

        <div className=" flex justify-between items-center text-gray-400 border-t-1 flex-col md:flex-row py-4">
          <p className='mb-8'>© 2026 Digitools. All rights reserved.</p>
          <div className="flex justify-between items-center gap-2 mb-8 sm:flex-col md:flex-row lg:flex-row">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;