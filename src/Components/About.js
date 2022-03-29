import React from 'react';
import RonimInFrame from '../img/RonimInframe.png';
import { AiFillLinkedin, AiFillPhone, AiFillMail } from 'react-icons/ai';
export default function About() {
  return (
    <div className="about" id="about">
      <div className="about__heading">
        <h1 className="about__heading about__heading--head">About</h1>

        <img
          className="about__heading about__heading--profile"
          src={RonimInFrame}
          alt="profileimage"
        />
        {/* <p className="about__title">Mr. Ronim karki</p> */}
      </div>
      <h1 className="about__title">Me, Myself & I</h1>
      <div className="about__box">
        <p>
          I am graduated student waking up for the journey of Web
          Development/Front-End Development. As a self-motivated, hardworking,
          and enthusiastic individual with strong determination, i can upgrade
          my skills and willing to grow as professional.
          <br /> <br />
          I have ability to think and learn quickly,looking for real world
          opportunities and challenges to enhance my skills and to contribute on
          it. I want to develop more and learn the new technology and become
          more advance and reliable.
          <br /> <br />
          Interested in the entire frontend spectrum and want to work with
          ambitious and positive people.
        </p>
        <hr
          className="about__box about__box--line"
          style={{ color: 'black' }}
        />
        <div className="about__box about__box--contact">
          <div className="about__box about__box--contact--items">
            <span className="icon">
              <AiFillMail />
            </span>{' '}
            <p>
              {' '}
              <b>Email</b>
              :- ronim.karki@gmail.com
            </p>
          </div>
          <div className="about__box about__box--contact--items">
            <span className="icon">
              <AiFillPhone />
            </span>
            <p>
              <b>Phone</b>:- 0410938499
            </p>
          </div>
          <div className="about__box about__box--contact--items">
            <span className="icon">
              <AiFillLinkedin />
            </span>
            <p>
              <b>LinkedIn</b>:-
              <a href="https://www.linkedin.com/in/ronim-karki-841930148/">
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
