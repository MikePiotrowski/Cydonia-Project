import React from 'react';
import './Links.css';

const Links = () => {
    return (
        <div className="links-page">
            <section id="showcase">
                <div className="container">
                    <h1>Mars & Cydonia Resources</h1>
                    <p>Explore our comprehensive collection of links to official resources, research organizations,
                        educational materials, and more about Mars and the Cydonia region. Whether you're a researcher,
                        educator, student, or simply curious about the Red Planet, you'll find valuable resources
                        here.</p>
                    <a href="#links-categories" className="button showcase-btn">Explore Resources</a>
                </div>
            </section>

            <section id="newsletter">
                <div className="container">
                    <h1>Subscribe to our newsletter</h1>
                    <form>
                        <input type="email" placeholder="Enter email..."/>
                        <button type="submit" className="button">Subscribe</button>
                    </form>
                </div>
            </section>

            <section id="links-categories">
                <div className="container">
                    <h2 className="section-title">Resource Categories</h2>
                    <p className="section-description">Our Mars and Cydonia links are organized into categories to help
                        you find exactly what you're looking for.</p>

                    <div className="categories-grid">
                        <div className="category-card"
                             onClick={() => document.getElementById('official-resources').scrollIntoView({behavior: 'smooth'})}>
                            <div className="category-icon"><i className="fas fa-globe"></i></div>
                            <h3>Official Resources</h3>
                            <p>NASA, ESA, and other space agencies</p>
                        </div>
                        <div className="category-card"
                             onClick={() => document.getElementById('mars-missions').scrollIntoView({behavior: 'smooth'})}>
                            <div className="category-icon"><i className="fas fa-rocket"></i></div>
                            <h3>Mars Missions</h3>
                            <p>Past, current, and future missions to Mars</p>
                        </div>
                        <div className="category-card"
                             onClick={() => document.getElementById('cydonia-research').scrollIntoView({behavior: 'smooth'})}>
                            <div className="category-icon"><i className="fas fa-search"></i></div>
                            <h3>Cydonia Research</h3>
                            <p>Resources focused on the Cydonia region</p>
                        </div>
                        <div className="category-card"
                             onClick={() => document.getElementById('educational-resources').scrollIntoView({behavior: 'smooth'})}>
                            <div className="category-icon"><i className="fas fa-graduation-cap"></i></div>
                            <h3>Educational Resources</h3>
                            <p>Learning materials for students and educators</p>
                        </div>
                        <div className="category-card"
                             onClick={() => document.getElementById('mars-images').scrollIntoView({behavior: 'smooth'})}>
                            <div className="category-icon"><i className="fas fa-camera"></i></div>
                            <h3>Mars Images & Data</h3>
                            <p>Image galleries and scientific data</p>
                        </div>
                        <div className="category-card"
                             onClick={() => document.getElementById('books-publications').scrollIntoView({behavior: 'smooth'})}>
                            <div className="category-icon"><i className="fas fa-book"></i></div>
                            <h3>Books & Publications</h3>
                            <p>Recommended reading about Mars and Cydonia</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="official-resources" className="links-section">
                <div className="container">
                    <h2 className="section-title">Official Resources</h2>
                    <p className="section-description">Links to official space agencies and government organizations
                        involved in Mars exploration.</p>

                    <div className="links-grid">
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-space-shuttle"></i></div>
                            <h3>NASA Mars Exploration Program</h3>
                            <p>NASA's official Mars exploration website with mission updates, discoveries, and
                                educational resources.</p>
                            <a href="https://mars.nasa.gov/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-satellite"></i></div>
                            <h3>ESA Mars Express</h3>
                            <p>European Space Agency's Mars Express mission website with images, data, and findings.</p>
                            <a href="https://www.esa.int/Science_Exploration/Space_Science/Mars_Express" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-globe-americas"></i></div>
                            <h3>USGS Astrogeology Science Center</h3>
                            <p>U.S. Geological Survey's center for planetary mapping and research.</p>
                            <a href="https://www.usgs.gov/centers/astrogeology-science-center" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-rocket"></i></div>
                            <h3>NASA Solar System Exploration: Mars</h3>
                            <p>Comprehensive information about Mars as part of NASA's solar system exploration.</p>
                            <a href="https://solarsystem.nasa.gov/planets/mars/overview/" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-user-astronaut"></i></div>
                            <h3>NASA Moon to Mars Program</h3>
                            <p>Information about NASA's plans for human exploration of Mars.</p>
                            <a href="https://www.nasa.gov/topics/moon-to-mars/mars/" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-globe-asia"></i></div>
                            <h3>JAXA Mars Exploration</h3>
                            <p>Japan Aerospace Exploration Agency's Mars missions and research.</p>
                            <a href="https://global.jaxa.jp/projects/sas/mars/" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mars-missions" className="links-section">
                <div className="container">
                    <h2 className="section-title">Mars Missions</h2>
                    <p className="section-description">Links to specific Mars missions, both past and present.</p>

                    <div className="links-grid">
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-robot"></i></div>
                            <h3>Mars Perseverance Rover</h3>
                            <p>NASA's most advanced Mars rover, searching for signs of ancient life and collecting
                                samples for return to Earth.</p>
                            <a href="https://mars.nasa.gov/mars2020/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-helicopter"></i></div>
                            <h3>Ingenuity Mars Helicopter</h3>
                            <p>The first aircraft to achieve powered, controlled flight on another planet.</p>
                            <a href="https://mars.nasa.gov/technology/helicopter/" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-microscope"></i></div>
                            <h3>Mars Curiosity Rover</h3>
                            <p>NASA's rover exploring Gale Crater since 2012, studying Mars' habitability.</p>
                            <a href="https://mars.nasa.gov/msl/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-broadcast-tower"></i></div>
                            <h3>InSight Mars Lander</h3>
                            <p>NASA's lander studying the interior of Mars through seismic monitoring.</p>
                            <a href="https://mars.nasa.gov/insight/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-satellite-dish"></i></div>
                            <h3>Mars Reconnaissance Orbiter</h3>
                            <p>Orbiter providing high-resolution images of the Martian surface, including Cydonia.</p>
                            <a href="https://mars.nasa.gov/mro/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-history"></i></div>
                            <h3>Viking Missions</h3>
                            <p>Historic NASA missions that first photographed the Face on Mars in 1976.</p>
                            <a href="https://www.nasa.gov/mission_pages/viking/" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cydonia-research" className="links-section">
                <div className="container">
                    <h2 className="section-title">Cydonia Research</h2>
                    <p className="section-description">Resources specifically focused on the Cydonia region and its
                        formations.</p>

                    <div className="links-grid">
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-camera"></i></div>
                            <h3>HiRISE Cydonia Images</h3>
                            <p>High-resolution images of the Cydonia region from the Mars Reconnaissance Orbiter.</p>
                            <a href="https://www.uahirise.org/results.php?keyword=cydonia" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-book"></i></div>
                            <h3>The Enterprise Mission</h3>
                            <p>Richard C. Hoagland's research organization focused on Cydonia and other space
                                anomalies.</p>
                            <a href="http://www.enterprisemission.com/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-users"></i></div>
                            <h3>Society for Planetary SETI Research</h3>
                            <p>Scientific organization studying potential evidence of extraterrestrial artifacts.</p>
                            <a href="http://spsr.utsi.edu/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-university"></i></div>
                            <h3>Cydonia Institute</h3>
                            <p>Research organization dedicated to studying the Cydonia region of Mars.</p>
                            <a href="http://www.thecydoniainstitute.com/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-map-marked-alt"></i></div>
                            <h3>Mars Cydonia Geological Maps</h3>
                            <p>USGS geological maps of the Cydonia region.</p>
                            <a href="https://pubs.usgs.gov/sim/3292/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-history"></i></div>
                            <h3>Cydonia: The First Photographs</h3>
                            <p>Archive of the original Viking images of Cydonia.</p>
                            <a href="https://www.nasa.gov/image-feature/the-face-on-mars" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="educational-resources" className="links-section">
                <div className="container">
                    <h2 className="section-title">Educational Resources</h2>
                    <p className="section-description">Learning materials for students, educators, and anyone interested
                        in Mars.</p>

                    <div className="links-grid">
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-graduation-cap"></i></div>
                            <h3>NASA Mars Education</h3>
                            <p>Educational resources about Mars for teachers and students.</p>
                            <a href="https://mars.nasa.gov/participate/marsforeducators/" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                            <h3>Mars for Educators</h3>
                            <p>Lesson plans and classroom activities about Mars exploration.</p>
                            <a href="https://www.jpl.nasa.gov/edu/teach/tag/search/Mars" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-vr-cardboard"></i></div>
                            <h3>Mars in VR</h3>
                            <p>Virtual reality experiences of Mars for educational purposes.</p>
                            <a href="https://accessmars.withgoogle.com/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-puzzle-piece"></i></div>
                            <h3>Mars Activities for Kids</h3>
                            <p>Fun and educational Mars-themed activities for children.</p>
                            <a href="https://spaceplace.nasa.gov/all-about-mars/en/" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-video"></i></div>
                            <h3>Mars Educational Videos</h3>
                            <p>Video resources about Mars for classroom use.</p>
                            <a href="https://www.youtube.com/playlist?list=PLTiv_XWHnOZpzQKYC6nLf6M9AuBbng_O8"
                               target="_blank" rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-atlas"></i></div>
                            <h3>Mars Trek</h3>
                            <p>NASA's online Mars mapping and visualization tool.</p>
                            <a href="https://trek.nasa.gov/mars/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mars-images" className="links-section">
                <div className="container">
                    <h2 className="section-title">Mars Images & Data</h2>
                    <p className="section-description">Resources for accessing Mars imagery and scientific data.</p>

                    <div className="links-grid">
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-images"></i></div>
                            <h3>NASA Mars Image Gallery</h3>
                            <p>Comprehensive collection of Mars images from various missions.</p>
                            <a href="https://mars.nasa.gov/multimedia/images/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-camera-retro"></i></div>
                            <h3>HiRISE Image Catalog</h3>
                            <p>High-resolution images of Mars from the HiRISE camera.</p>
                            <a href="https://www.uahirise.org/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-database"></i></div>
                            <h3>Planetary Data System</h3>
                            <p>NASA's archive of data from planetary missions, including Mars.</p>
                            <a href="https://pds.nasa.gov/" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-globe"></i></div>
                            <h3>Mars Global Surveyor Images</h3>
                            <p>Archive of images from the Mars Global Surveyor mission.</p>
                            <a href="https://www.msss.com/mgs/moc/index.html" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-map"></i></div>
                            <h3>USGS Mars Maps</h3>
                            <p>Detailed maps of Mars created by the U.S. Geological Survey.</p>
                            <a href="https://astrogeology.usgs.gov/maps/mars-themis-controlled-photomosaic"
                               target="_blank" rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                        <div className="link-card">
                            <div className="link-icon"><i className="fas fa-cloud-download-alt"></i></div>
                            <h3>Mars Open Data</h3>
                            <p>Open access to Mars mission data for researchers and the public.</p>
                            <a href="https://data.nasa.gov/browse?q=mars" target="_blank" rel="noopener noreferrer"
                               className="button">Visit Website</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="books-publications" className="links-section">
                <div className="container">
                    <h2 className="section-title">Books & Publications</h2>
                    <p className="section-description">Recommended reading about Mars and Cydonia from various
                        perspectives.</p>

                    <div className="links-grid">
                        <div className="link-card book-card">
                            <div className="link-icon"><i className="fas fa-book"></i></div>
                            <h3>The Monuments of Mars</h3>
                            <p>By Richard C. Hoagland - Classic book examining the Cydonia region and its potential
                                artificial structures.</p>
                            <a href="https://www.amazon.com/Monuments-Mars-City-Edge-Forever/dp/1583940545"
                               target="_blank" rel="noopener noreferrer" className="button">Find Book</a>
                        </div>
                        <div className="link-card book-card">
                            <div className="link-icon"><i className="fas fa-book"></i></div>
                            <h3>The Case for Mars</h3>
                            <p>By Robert Zubrin - Influential book on Mars exploration and colonization.</p>
                            <a href="https://www.amazon.com/Case-Mars-Plan-Settle-Planet/dp/145160811X" target="_blank"
                               rel="noopener noreferrer" className="button">Find Book</a>
                        </div>
                        <div className="link-card book-card">
                            <div className="link-icon"><i className="fas fa-book"></i></div>
                            <h3>Mars: The NASA Mission Reports</h3>
                            <p>Compilation of official NASA documents about Mars missions.</p>
                            <a href="https://www.amazon.com/Mars-NASA-Mission-Reports-Vol/dp/1896522602" target="_blank"
                               rel="noopener noreferrer" className="button">Find Book</a>
                        </div>
                        <div className="link-card book-card">
                            <div className="link-icon"><i className="fas fa-book"></i></div>
                            <h3>The Scientific Context for Exploration of the Moon</h3>
                            <p>National Research Council publication on Mars science objectives.</p>
                            <a href="https://www.nap.edu/catalog/11954/the-scientific-context-for-exploration-of-the-moon"
                               target="_blank" rel="noopener noreferrer" className="button">Find Book</a>
                        </div>
                        <div className="link-card book-card">
                            <div className="link-icon"><i className="fas fa-book"></i></div>
                            <h3>Mars: An Introduction to its Interior, Surface and Atmosphere</h3>
                            <p>By Nadine Barlow - Academic overview of Mars science.</p>
                            <a href="https://www.cambridge.org/core/books/mars/D3FD857F607979C28E86C51F6BF2F2E7"
                               target="_blank" rel="noopener noreferrer" className="button">Find Book</a>
                        </div>
                        <div className="link-card book-card">
                            <div className="link-icon"><i className="fas fa-newspaper"></i></div>
                            <h3>Journal of Scientific Exploration</h3>
                            <p>Peer-reviewed journal that has published papers on Cydonia anomalies.</p>
                            <a href="https://www.scientificexploration.org/journal" target="_blank"
                               rel="noopener noreferrer" className="button">Visit Website</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="suggest-link">
                <div className="container">
                    <h2 className="section-title">Suggest a Resource</h2>
                    <p className="section-description">Know of a valuable Mars or Cydonia resource that should be
                        included here? Let us know!</p>

                    <div className="suggest-form-container">
                        <form id="suggest-link-form">
                            <div className="form-group">
                                <label htmlFor="link-name">Resource Name</label>
                                <input type="text" id="link-name" name="link-name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="link-url">Website URL</label>
                                <input type="url" id="link-url" name="link-url" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="link-category">Category</label>
                                <select id="link-category" name="link-category" required>
                                    <option value="">Select a category</option>
                                    <option value="official">Official Resources</option>
                                    <option value="missions">Mars Missions</option>
                                    <option value="cydonia">Cydonia Research</option>
                                    <option value="educational">Educational Resources</option>
                                    <option value="images">Mars Images & Data</option>
                                    <option value="books">Books & Publications</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="link-description">Brief Description</label>
                                <textarea id="link-description" name="link-description" rows="3" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="submitter-email">Your Email (optional)</label>
                                <input type="email" id="submitter-email" name="submitter-email"/>
                            </div>
                            <button type="submit" className="button">Submit Resource</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Links;