import React from 'react'
import './navbar.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

    useGSAP(() => {
    gsap.from(".item", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <div className='navbar'>
      <div className="logo">
        <div className="circle-1 item"></div>
        <div className="circle-1 item"></div>
        <div className="circle-2 item"></div>
        <div className="company-name item">
           <h3><a href="#">KOMONO</a> </h3>
           <p> <a href="#">WATCHES</a></p>
        </div>
      </div>
       <div className="collection item">
            <span className='collection__title'>COLLECTION  /  </span>
            <span className='men'><b><a href="#">MEN</a></b> <span className='down-arrow'>▼</span> </span>
        </div>
        <div className="type item">
            <span className='type__title'>TYPE  /  </span>
            <span className='magnus'><b><a href="#">MAGNUS SILVER DIAL BURGUNDY </a></b><span className='down-arrow'>▼</span> </span>
        </div>
        <div className="cart-details item">
            <p>You have 2 items in <a href="#">CART</a></p>
        </div>
    </div>
  )
}

export default Navbar
