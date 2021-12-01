import React from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from '../config/particle-config';
import NavBar from './NavBar';
import Three from './Three';
import Protfolio from './Protfolio';
import Footer from './Footer';

export default function BackgroudNav() {
  return (
    <>
      <header>
        <div className="particles">
          <NavBar />

          <Particles params={ParticlesConfig}></Particles>
          <Three />
        </div>
      </header>
      <div>
        <Protfolio />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
