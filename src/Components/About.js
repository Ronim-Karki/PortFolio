import React from 'react';
import Ronim from '../img/ronimpic.jpg';
export default function About() {
  return (
    <div className="about">
      <div className="about__heading">About</div>
      <img className="about__profile" src={Ronim} alt="profileimage" />
      <p>
        I am graduated student waking up for the journey of Web
        Development/Front-End Development. As a self-motivated, hardworking, and
        enthusiastic individual with strong determination, I can work and use my
        experiences to extend my programming knowledge to great extent. I have
        ability to think and learn quickly, having skills in HTML, CSS
        JavaScript, jQuery, PHP, Bootstrap, MYSQL, WordPress, VSC, working
        knowledge of React Js (Hooks, redux) and Advance JavaScript frameworks
        including JavaScript runtime Node.js. Knowledge of designing Tools such
        as Adobe Photoshop, InDesign, etc. I have work on some small projects
        like library management system, pet-adoption- site, blogs, and
        portfolio. Looking for real world opportunities and challenges to
        enhance my skills and to contribute on it. I want to develop more and
        learn the new technology and become more advance and reliable.
      </p>
      <hr className="about__line" style={{ color: 'black' }} />
      <div className="about__contact">
        <p>
          <b>Email</b>:- ronim.karki@gmail.com
        </p>
        <p>
          <b>Phone</b>:- 0410938499
        </p>
        <p>
          <b>LinkedIn</b>:-{' '}
          <a href="https://www.linkedin.com/in/ronim-karki-841930148/">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
}
