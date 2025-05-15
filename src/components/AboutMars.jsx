import React from 'react';
import './AboutMars.css';
import {useAppContext} from '../context/AppContext';

const AboutMars = () => {
    const {theme} = useAppContext();

    return (
        <section id="about" className={`about-mars-section ${theme}`}>
            <div className="container">
                <h2 className="section-title">Mars: The Basics</h2>
                <p className="section-description">
                    Mars is the fourth planet from the Sun and the second-smallest planet in our Solar System.
                    Often called the "Red Planet" due to its reddish appearance, Mars has fascinated astronomers and
                    scientists for centuries.
                </p>

                <div className="mars-info-grid">
                    <div className="mars-info-card">
                        <h3>Physical Characteristics</h3>
                        <img
                            src="https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg"
                            alt="Mars Planet"
                            className="mars-image"
                        />
                        <p>
                            Mars has a diameter of approximately 6,779 kilometers (4,212 miles), about half the size of
                            Earth.
                            Its reddish appearance comes from iron oxide (rust) on its surface. Mars has two small
                            moons,
                            Phobos and Deimos, which are thought to be captured asteroids. The planet has a thin
                            atmosphere
                            composed primarily of carbon dioxide.
                        </p>
                    </div>

                    <div className="mars-info-card">
                        <h3>Surface Features</h3>
                        <div className="image-gallery">
                            <img src="/img/MarsSurface.jpg" alt="Mars Surface Features"/>
                            <img src="/img/Olympusmons.png" alt="Olympus Mons"/>
                            <img src="/img/Valles_marineris_enhanced.jpg" alt="Valles Marineris"/>
                        </div>
                        <p>
                            Mars has some of the most impressive geological features in our solar system, including
                            Olympus Mons,
                            the largest volcano and highest mountain in the solar system, standing at 22 km (13.6 miles)
                            high.
                            The planet also features Valles Marineris, a system of canyons that stretches over 4,000 km
                            (2,500 miles)
                            across its surface.
                        </p>
                    </div>

                    <div className="mars-info-card">
                        <h3>Water on Mars</h3>
                        <div className="image-gallery">
                            <img src="/img/mriverbed.jpg" alt="Ancient Martian Riverbed"/>
                            <img src="/img/micecap.jpg" alt="Mars Polar Ice Cap"/>
                            <img src="/img/Marswater.jpg" alt="Water on Mars"/>
                        </div>
                        <p>
                            Evidence suggests that Mars once had significant amounts of liquid water on its surface.
                            Today, water exists primarily as ice in the polar ice caps and beneath the surface.
                            The discovery of recurring slope lineae (RSL) suggests that liquid water may still flow
                            on the surface under certain conditions, raising hopes for potential microbial life.
                        </p>
                    </div>
                </div>

                <div className="mars-exploration">
                    <h3 className="subsection-title">Mars Exploration Timeline</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">1965</div>
                            <div className="timeline-content">
                                <h4>Mariner 4</h4>
                                <p>
                                    NASA's Mariner 4 became the first spacecraft to successfully fly by Mars,
                                    capturing the first close-up images of another planet from space.
                                    The images revealed a cratered, seemingly lifeless world.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">1976</div>
                            <div className="timeline-content">
                                <h4>Viking Missions</h4>
                                <p>
                                    NASA's Viking 1 and 2 became the first spacecraft to successfully land on Mars.
                                    They conducted experiments to search for signs of life, though the results were
                                    inconclusive.
                                    Viking 1 also captured the famous "Face on Mars" image in the Cydonia region.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">1997</div>
                            <div className="timeline-content">
                                <h4>Mars Pathfinder</h4>
                                <p>
                                    NASA's Mars Pathfinder delivered the Sojourner rover, the first wheeled vehicle to
                                    operate on Mars.
                                    This mission demonstrated new landing technologies and provided valuable data about
                                    Martian geology.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2004</div>
                            <div className="timeline-content">
                                <h4>Spirit and Opportunity</h4>
                                <p>
                                    NASA's twin rovers Spirit and Opportunity landed on Mars. Designed to operate for 90
                                    days,
                                    Opportunity continued functioning for over 14 years, discovering evidence that Mars
                                    once had
                                    water and potentially habitable conditions.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2012</div>
                            <div className="timeline-content">
                                <h4>Curiosity Rover</h4>
                                <p>
                                    NASA's Curiosity rover, part of the Mars Science Laboratory mission, landed in Gale
                                    Crater.
                                    Equipped with advanced scientific instruments, Curiosity has found evidence that
                                    Mars could
                                    have supported microbial life in the past.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2021</div>
                            <div className="timeline-content">
                                <h4>Perseverance & Ingenuity</h4>
                                <p>
                                    NASA's Perseverance rover landed in Jezero Crater, carrying the Ingenuity
                                    helicopter,
                                    which became the first aircraft to make a powered, controlled flight on another
                                    planet.
                                    Perseverance is collecting samples for future return to Earth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="life-on-mars">
                    <h3 className="subsection-title">Life on Mars?</h3>
                    <p>
                        The question of whether life exists or has existed on Mars remains one of the most compelling
                        mysteries in planetary science. While no definitive evidence of life has been found, several
                        discoveries have kept the possibility open.
                    </p>
                    <p>
                        Scientists have discovered organic molecules in Martian soil, seasonal methane fluctuations
                        in the atmosphere, and evidence of ancient habitable environments with liquid water.
                        The Perseverance rover is currently searching for signs of ancient microbial life in
                        Jezero Crater, which was once filled with water.
                    </p>
                    <p>
                        Future missions, including sample return missions and human exploration, will continue
                        the search for evidence of past or present life on the Red Planet.
                    </p>
                </div>

                <div className="mars-faq">
                    <h3 className="subsection-title">Mars FAQ</h3>
                    <div className="faq-container">
                        <div className="faq-item">
                            <h4>How long does it take to travel to Mars?</h4>
                            <p>
                                The travel time to Mars varies depending on the positions of Earth and Mars in their
                                orbits.
                                Typically, a one-way trip takes between 6-9 months using current propulsion technology.
                                The optimal launch windows for Mars missions occur approximately every 26 months when
                                the planets are properly aligned.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>What is the temperature on Mars?</h4>
                            <p>
                                Mars has extreme temperature variations. The average temperature is about -80°F (-62°C),
                                but temperatures can range from -195°F (-125°C) near the poles during winter to 70°F
                                (20°C)
                                near the equator during summer days. The thin atmosphere means temperature can fluctuate
                                dramatically between day and night.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>Could humans live on Mars?</h4>
                            <p>
                                Human settlement on Mars would face significant challenges, including radiation
                                exposure,
                                low gravity effects on health, extreme temperatures, and the need for life support
                                systems.
                                However, with proper technology and infrastructure, humans could potentially establish
                                habitats on Mars. NASA and private companies like SpaceX are actively developing
                                technologies for future human missions to Mars.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>What causes Mars' red color?</h4>
                            <p>
                                Mars appears red because its surface contains a large amount of iron oxide, commonly
                                known as rust.
                                Over billions of years, the iron in Mars' soil has oxidized (rusted) giving the planet
                                its
                                distinctive reddish-orange appearance. This process is similar to how iron objects rust
                                on
                                Earth when exposed to oxygen and water.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>Does Mars have seasons?</h4>
                            <p>
                                Yes, Mars has seasons similar to Earth because its axis is tilted at about 25 degrees
                                (Earth's is 23.5 degrees). However, Martian seasons last nearly twice as long as Earth's
                                because Mars takes 687 Earth days to orbit the Sun. The seasons are also more extreme
                                due
                                to Mars' elliptical orbit, with the southern hemisphere experiencing more dramatic
                                seasonal changes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMars;