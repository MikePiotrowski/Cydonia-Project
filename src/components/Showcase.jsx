import React from 'react';
import './Showcase.css';

const Showcase = () => {
  return (
    <section id="showcase" role="region" aria-labelledby="showcase-heading">
      <div className="container">
        <h1 id="showcase-heading">The Mysteries of Cydonia on Mars</h1>
        <p>
          Discover the enigmatic region on Mars where NASA's Viking 1 orbiter captured 
          images of what appears to be a humanoid face and pyramid-like structures in 1976. 
          These formations have sparked decades of scientific debate and public fascination 
          about possible ancient civilizations on the Red Planet.
        </p>
        <a href="#cydonia-info" className="button showcase-btn">Explore Cydonia</a>
      </div>
    </section>
  );
};

export default Showcase;