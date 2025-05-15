import React from 'react';
import './Showcase.css';
import withMemo from '../hoc/withMemo';

const Showcase = () => {
  return (
      <section id="showcase" role="region" aria-labelledby="showcase-heading">
          <div className="parallax-bg stars-bg"></div>
          <div className="parallax-bg mars-bg"></div>
          <div className="parallax-bg dust-overlay"></div>
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

// Export memoized component to prevent unnecessary re-renders
export default withMemo(Showcase);
