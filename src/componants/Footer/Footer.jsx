import { Camera, XCircle } from 'lucide-react';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto">
        <footer className="footer sm:footer-horizontal  text-neutral-content pt-10">
          <nav>
            <h2 className="text-3xl font-bold">DigiTools</h2>
            <p>
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About </a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press </a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
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
        </footer>

        <div className="divider">Neutral</div>

        <div className=" flex justify-between items-center text-gray-400 border-t-1">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex justify-between items-center gap-2 mb-8">
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