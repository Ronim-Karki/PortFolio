import React from 'react';
import portfolioData from '../Objects/portfolioData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './About.js';
export default function Protfolio() {
  return (
    <>
      <div className="container" id="container">
        <h2 className="container__heading">Portfolio</h2>
        <div className="container__images">
          {/* <div className="container__images container__images--img-1">
          <img className="image1" src={Natours} alt="Images" />

          <button className="image1__btn" type="submit">
            Visit Site
          </button>
        </div>
        <div className="container__images container__images--img-2">
          <img className="image2" id="img-2" src={Nexter} alt="Images" />
        </div>
        <div className="container__images container__images--img-3">
          <img className="image3" id="img-3" src={Natours} alt="Images" />
        </div> */}

          {portfolioData.map((item, index) => {
            const { link, gitLink, img } = item;

            return (
              <div className="container__images container__images--img-1">
                <img className="image1" src={img} alt="Images" />

                <a
                  className="image1__btn"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Site
                </a>

                <a
                  className="image1__btn1"
                  href={gitLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon="fa-brands fa-github"
                    style={{ color: 'white' }}
                  />
                  github Repo
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <About />
    </>
  );
}
