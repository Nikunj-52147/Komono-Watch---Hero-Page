import React from 'react'
import './hero.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {

     useGSAP(() => {
    gsap.from(".fade-item", {
      x: -500,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
      ease: "power3.out",
    });
  });

     useGSAP(() => {
    gsap.from(".imgContainer", {
      x: 500,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
      ease: "power3.out",
    });
  });

  return (
    <div className='hero'>
      <div className="textContainer">
        <div className="extra-details">
            <div className="previous-model fade-item">
              <a href="#">PREVIOUS MODEL</a>
            </div>
            <div className="details fade-item">
              <div className="details__title">DETAILS</div>
              <div className="details__desc">
                <p>Janapese Quartz Movement</p>
                <p>Brushed or Matte Metal Case</p>
                <p>Stainless Steel Back</p>
                <p>Case Water Resistant 3atm</p>
                <p>One Piece Genuine Leather Wristband</p>
                <p>&#934; 46mm</p>
                <p>Komono Magnus Silver Burgundy</p>
              </div>
            </div>
        </div>
        <div className="main-info">
            <h4 className="category fade-item">MEN WATCHES</h4>
            <h1 className='title fade-item'>MAGNUS SILVER</h1>
            <h2 className='subtitle fade-item'>DIAL BURGUNDY</h2>
            <div className="about fade-item">
                <div className="about__title ">ABOUT</div>
                <div className="about__desc "><p>This attractive Komono Magnus watch is made from stainless steel and is fitted with an analouge quartz movement. It is fitted with a brown leather strap and has a white dial.</p></div>
            </div>
            <div className="button fade-item">
              <button><a href="#">BUY &#8364; 74,95</a></button>
            </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/without-bg-watch.png" alt="Magnus Silver Dial Burgundy" />
        <div className="next-model"><a href="#">NEXT MODEL</a></div>
      </div>
    </div>
  )
}

export default Hero
