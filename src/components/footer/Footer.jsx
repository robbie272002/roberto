import React, { useEffect, useState } from 'react';
import appstore from '../../assets/img/logos/App_Store.webp';
import playstore from '../../assets/img/logos/Play_Store.webp';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          className="btn scroll-to-top text-white rounded-circle d-flex justify-content-center align-items-center bg-primary"
          onClick={scrollToTop}
        >
          <span className="uil uil-angle-up"></span>
        </button>
      )}

      <footer className="pt-7 pt-lg-8">
        <div className="container">
          <div className="row gy-4 g-md-3 border-bottom pb-8 pb-lg-9 justify-content-center">
            <div className="col-6 col-md-3">
              <p className="mb-2 lh-lg ls-1">Company</p>
              <ul className="list-unstyled text-1100">
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#about">About us</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#contact">Contact us</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Careers</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Press</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <p className="mb-2 lh-lg">Product</p>
              <ul className="list-unstyled text-1100">
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Features</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Pricing</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">News</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Help desk</a></li>
                <li className="mb-1"><a className="ls-1 lh-xl" href="#">Support</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <p className="mb-2 lh-lg">Legal</p>
              <ul className="list-unstyled text-1100">
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Privacy</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Terms & Conditions</a></li>
                <li className="mb-1"> <a className="ls-1 lh-xl" href="#">Return Policy</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-3 d-md-flex flex-column align-items-md-end pe-md-0">
              <p className="mb-2 lh-lg">Download Our App</p>
              <div className="mb-1 mb-lg-2">
                <a className="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#">
                  <img className="img-fluid" src={appstore} alt="Download on the App Store" />
                </a>
              </div>
              <a className="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#">
                <img className="img-fluid" src={playstore} alt="Get it on Google Play" />
              </a>
            </div>
          </div>

          <div className="row gy-2 py-3 justify-content-center justify-content-md-between">
            <div className="col-auto ps-0">
              <p className="text-center text-md-start lh-xl text-1100"> © 2024 Copyright, All Rights Reserved, Made by <a className="fw-semi-bold" href="#">User X</a> ❤️</p>
            </div>
            <div className="col-auto pe-0">
              <a className="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#"><span className="uil uil-twitter"></span></a>
              <a className="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#"><span className="uil uil-instagram"></span></a>
              <a className="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" href="#"><span className="uil uil-linkedin"></span></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
