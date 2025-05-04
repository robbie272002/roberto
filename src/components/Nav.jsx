import React from 'react'
import image from '../assets/img/logos/logo.svg'

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-md fixed-top" id="navbar" data-navbar-soft-on-scroll="data-navbar-soft-on-scroll">
          <div class="container-fluid px-0"><a href="/"><img src={image} class="navbar-brand w-75 d-md-none" alt="logo" /></a><a class="navbar-brand fw-bold d-none d-md-block" href="/">Brainwave.io</a><a class="btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto" href="#">Get Started Now </a><button class="navbar-toggler border-0 pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse justify-content-md-end" id="navbar-content" data-navbar-collapse="data-navbar-collapse">
              <ul class="navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0" data-navbar-nav="data-navbar-nav">
                <li class="nav-item"> <a class="nav-link lh-xl" href="#home">Home</a></li>
                <li class="nav-item"> <a class="nav-link lh-xl" href="#about">About us</a></li>
                <li class="nav-item"> <a class="nav-link lh-xl" href="#service">Support</a></li>
                <li class="nav-item"> <a class="nav-link lh-xl" href="#pricing">Pricing</a></li>
                <li class="nav-item"> <a class="nav-link lh-xl" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
    </nav>
  )
}

export default Nav


// const Nav = ({ image, brandName = "Brainwave.io", buttonText = "Get Started Now" }) => {
//     const navLinks = [
//       { name: "Home", href: "#home" },
//       { name: "About us", href: "#about" },
//       { name: "Support", href: "#service" },
//       { name: "Pricing", href: "#pricing" },
//       { name: "Contact", href: "#contact" },
//     ];
  
//     return (
//       <nav className="navbar navbar-expand-md fixed-top" id="navbar" data-navbar-soft-on-scroll={true}>
//         <div className="container-fluid px-0">
//           {/* Logo for Mobile */}
//           <a href="/" aria-label={`${brandName} Home`}>
//             {image ? (
//               <img src={image} className="navbar-brand w-75 d-md-none" alt={`${brandName} Logo`} />
//             ) : (
//               <span className="navbar-brand w-75 d-md-none">{brandName}</span>
//             )}
//           </a>
  
//           {/* Logo for Desktop */}
//           <a className="navbar-brand fw-bold d-none d-md-block" href="/" aria-label={`${brandName} Home`}>
//             {brandName}
//           </a>
  
//           {/* CTA Button */}
//           <a className="btn btn-primary btn-sm ms-md-1 mt-lg-0 order-md-1 ms-auto" href="#" aria-label={buttonText}>
//             {buttonText}
//           </a>
  
//           {/* Navbar Toggler */}
//           <button
//             className="navbar-toggler border-0 pe-0"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbar-content"
//             aria-controls="navbar-content"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
  
//           {/* Navigation Links */}
//           <div className="collapse navbar-collapse justify-content-md-end" id="navbar-content">
//             <ul className="navbar-nav gap-md-2 gap-lg-3 pt-1 pb-1 pt-md-0 pb-md-0">
//               {navLinks.map((link, index) => (
//                 <li key={index} className="nav-item">
//                   <a className="nav-link lh-xl" href={link.href} aria-label={`Navigate to ${link.name}`}>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   };
  
//   export default Nav;
  