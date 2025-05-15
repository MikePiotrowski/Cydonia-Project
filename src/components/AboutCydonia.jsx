import React from 'react';
import './AboutCydonia.css';
import {useAppContext} from '../context/AppContext';

const AboutCydonia = () => {
    const {theme} = useAppContext();

    return (
        <section id="cydonia" className={`about-cydonia-section ${theme}`}>
            <div className="container">
                <h2 className="section-title">Cydonia: The Basics</h2>
                <p className="section-description">
                    Cydonia is a region located in the northern hemisphere of Mars, situated at approximately 40.75°
                    north latitude
                    and 350.54° east longitude. It sits at the boundary between the heavily cratered southern highlands
                    and the
                    smoother northern lowlands, in an area known as the Arabia Terra.
                </p>
                <p className="section-description">
                    The region gained worldwide attention after NASA's Viking 1 orbiter captured images in 1976 showing
                    what
                    appeared to be a humanoid face and several pyramid-like structures. These formations have been the
                    subject
                    of scientific study, public fascination, and alternative theories for decades.
                </p>

                <div className="cydonia-info-grid">
                    <div className="cydonia-info-card">
                        <h3>The Face on Mars</h3>
                        <img
                            src="https://mars.nasa.gov/mgs/msss/camera/images/4_6_00_face_release/face_e0300824_proc.gif"
                            alt="Face on Mars - Viking and MGS Comparison"
                            className="cydonia-image"
                        />
                        <p>
                            The most famous feature in Cydonia is the so-called "Face on Mars," a mesa approximately 3
                            km long that,
                            when photographed by Viking 1 at low resolution and specific lighting conditions, appeared
                            to resemble a
                            humanoid face. This feature, officially designated as Cydonia Mensae, became the centerpiece
                            of both
                            scientific inquiry and alternative theories about Mars.
                        </p>
                    </div>

                    <div className="cydonia-info-card">
                        <h3>The D&M Pyramid and City</h3>
                        <div className="image-gallery">
                            <img src="https://www.bibliotecapleyades.net/imagenes_marte/cydonia_pyramids01.jpg"
                                 alt="D&M Pyramid"/>
                            <img src="https://www.bibliotecapleyades.net/imagenes_marte/cydonia_pyramids02.jpg"
                                 alt="City Square"/>
                        </div>
                        <p>
                            Near the Face are several other unusual formations, including the "D&M Pyramid" (named after
                            researchers
                            Vincent DiPietro and Gregory Molenaar), a five-sided pyramidal structure, and what some
                            researchers have
                            called the "City Square," a collection of mound-like features arranged in a seemingly
                            geometric pattern.
                        </p>
                    </div>

                    <div className="cydonia-info-card">
                        <h3>Geological Context</h3>
                        <div className="image-gallery">
                            <img
                                src="https://mars.nasa.gov/mgs/msss/camera/images/4_6_00_face_release/face_context_big.gif"
                                alt="Cydonia Region Context"
                                className="single-image"
                            />
                        </div>
                        <p>
                            Cydonia is located in a transition zone between two distinct Martian terrains. This boundary
                            area features
                            numerous mesas, knobs, and other erosional features that are common in such geological
                            transition zones.
                            The region has likely been shaped by a combination of impact cratering, volcanic activity,
                            wind erosion,
                            and possibly ancient water processes.
                        </p>
                    </div>
                </div>

                <div className="nasa-research">
                    <h3 className="subsection-title">NASA's Research on Cydonia</h3>
                    <p className="subsection-description">
                        NASA has conducted extensive research on the Cydonia region through multiple missions, providing
                        increasingly
                        detailed images and scientific analysis of the area's features.
                    </p>

                    <div className="research-content">
                        <div className="research-item">
                            <h4>Viking Missions (1976)</h4>
                            <p>
                                The story of Cydonia began with NASA's Viking 1 orbiter, which captured the first images
                                of the region
                                on July 25, 1976. These low-resolution images (with pixels representing about 50 meters)
                                showed what
                                appeared to be a face-like feature under specific lighting conditions. NASA scientists
                                initially noted
                                the face-like appearance as a curious light and shadow effect but did not attribute any
                                artificial origin to it.
                            </p>
                        </div>

                        <div className="research-item">
                            <h4>Mars Global Surveyor (1998-2006)</h4>
                            <p>
                                NASA's Mars Global Surveyor (MGS) mission captured much higher resolution images of the
                                Cydonia region
                                in 1998 and 2001. The MGS Camera, capable of resolving features as small as 1.5 meters
                                across, revealed
                                that the "Face" was a natural geological formation - an eroded mesa similar to many
                                others in the region.
                                These detailed images showed that the facial features apparent in the Viking images were
                                the result of
                                low resolution, specific lighting conditions, and human pareidolia (the tendency to
                                perceive meaningful
                                patterns in random stimuli).
                            </p>
                        </div>

                        <div className="research-item">
                            <h4>Mars Reconnaissance Orbiter (2006-Present)</h4>
                            <p>
                                The Mars Reconnaissance Orbiter (MRO), with its High Resolution Imaging Science
                                Experiment (HiRISE) camera,
                                has provided the most detailed views of Cydonia to date. These images, with resolution
                                down to about 30
                                centimeters per pixel, have further confirmed the natural geological origin of the
                                features in Cydonia.
                                The detailed topography revealed by MRO shows that the "Face" and other features are
                                consistent with
                                natural erosional processes common on Mars.
                            </p>
                        </div>

                        <div className="research-item">
                            <h4>Scientific Conclusions</h4>
                            <p>
                                NASA's scientific analysis of the Cydonia region has consistently concluded that the
                                features are natural
                                geological formations. The agency's position is that the face-like appearance in the
                                original Viking images
                                was due to the combination of low resolution, specific lighting conditions at the time
                                of imaging, and the
                                human tendency to recognize familiar patterns (particularly faces) in random stimuli.
                            </p>
                            <p>
                                Geologists have identified the "Face" as a mesa, a common landform in this region of
                                Mars where erosion
                                has shaped the landscape. The apparent symmetry and facial features visible in the
                                Viking images disappeared
                                when viewed at higher resolution and from different angles, supporting the conclusion
                                that they were artifacts
                                of imaging conditions rather than evidence of artificial construction.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="alternative-research">
                    <h3 className="subsection-title">Alternative Research on Cydonia</h3>
                    <p className="subsection-description">
                        Some independent researchers have offered alternative interpretations of the Cydonia formations,
                        suggesting
                        they may have artificial origins.
                    </p>

                    <div className="research-content">
                        <div className="research-item">
                            <h4>The Monuments of Mars</h4>
                            <p>
                                In his 1987 book "The Monuments of Mars: A City on the Edge of Forever," Richard C.
                                Hoagland presented
                                his analysis of the Cydonia region. He proposed that the "Face on Mars" and nearby
                                pyramidal structures
                                might be artificial monuments constructed by an ancient Martian civilization. Hoagland's
                                work built upon
                                earlier analyses by Vincent DiPietro and Gregory Molenaar, who had enhanced the Viking
                                images using computer
                                processing techniques they called the "Starburst Pixel Interleaving Technique" (SPIT).
                            </p>
                        </div>

                        <div className="research-item">
                            <h4>Geometric Analysis</h4>
                            <p>
                                A significant aspect of alternative research involves geometric analysis of the
                                relationship between various
                                features in Cydonia. Some researchers have identified what they call a "geometric
                                relationship model" among
                                the Face, D&M Pyramid, and other features in the region. According to their analysis,
                                these structures are
                                arranged in a pattern that incorporates specific mathematical constants, including π
                                (pi), e (the base of
                                natural logarithms), and the square root of 2.
                            </p>
                            <p>
                                These researchers argue that these mathematical relationships would be highly unlikely
                                to occur naturally
                                and suggest they may represent a form of "mathematical communication" intended to be
                                discovered by future observers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cydonia-timeline">
                    <h3 className="subsection-title">Cydonia Research Timeline</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">1976</div>
                            <div className="timeline-content">
                                <h4>Viking 1 Discovery</h4>
                                <p>
                                    NASA's Viking 1 orbiter captures the first images of the "Face on Mars" and other
                                    unusual formations
                                    in the Cydonia region. NASA releases the image with the caption: "The picture shows
                                    eroded mesa-like
                                    landforms. The huge rock formation in the center, which resembles a human head, is
                                    formed by shadows
                                    giving the illusion of eyes, nose and mouth."
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">1977</div>
                            <div className="timeline-content">
                                <h4>Initial Public Interest</h4>
                                <p>
                                    Computer engineers Vincent DiPietro and Gregory Molenaar discover the Face image in
                                    NASA archives and
                                    begin analyzing it, developing image enhancement techniques to better visualize the
                                    formation.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">1987</div>
                            <div className="timeline-content">
                                <h4>The Monuments of Mars</h4>
                                <p>
                                    Richard C. Hoagland publishes "The Monuments of Mars: A City on the Edge of
                                    Forever," presenting his
                                    analysis of the Cydonia region and proposing that the structures might be artificial
                                    in origin.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">1998</div>
                            <div className="timeline-content">
                                <h4>Mars Global Surveyor Images</h4>
                                <p>
                                    NASA's Mars Global Surveyor captures higher-resolution images of the Face, showing
                                    it to be a natural
                                    mesa formation. NASA scientists conclude it is a natural geological feature, while
                                    alternative researchers
                                    continue to debate its origins.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2001</div>
                            <div className="timeline-content">
                                <h4>Further MGS Imaging</h4>
                                <p>
                                    Mars Global Surveyor captures additional images of Cydonia from different angles and
                                    lighting conditions,
                                    providing more data for both scientific analysis and alternative interpretations.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-date">2006</div>
                            <div className="timeline-content">
                                <h4>Mars Reconnaissance Orbiter</h4>
                                <p>
                                    The Mars Reconnaissance Orbiter begins capturing the highest-resolution images of
                                    Cydonia to date with
                                    its HiRISE camera, providing unprecedented detail of the region's geological
                                    features.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cydonia-faq">
                    <h3 className="subsection-title">Cydonia FAQ</h3>
                    <div className="faq-container">
                        <div className="faq-item">
                            <h4>What exactly is the "Face on Mars"?</h4>
                            <p>
                                The "Face on Mars" is a mesa (hill with a flat top and steep sides) in the Cydonia
                                region that, when
                                photographed by NASA's Viking 1 orbiter in 1976 under specific lighting conditions and
                                at low resolution,
                                appeared to resemble a humanoid face. NASA scientists describe it as a natural
                                geological formation shaped
                                by erosion, while some independent researchers have suggested it might be an artificial
                                structure.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>Has NASA "debunked" the Face on Mars?</h4>
                            <p>
                                NASA has not used the term "debunked" but has concluded based on higher-resolution
                                images from the Mars
                                Global Surveyor and Mars Reconnaissance Orbiter that the Face is a natural geological
                                formation. These
                                later images show details not visible in the original Viking photographs and reveal that
                                many of the
                                facial features were artifacts of the low resolution and specific lighting conditions of
                                the original images.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>Why does Cydonia continue to fascinate people?</h4>
                            <p>
                                Cydonia remains fascinating for several reasons: (1) The human tendency to recognize
                                faces (pareidolia)
                                creates a strong psychological impact; (2) The philosophical and existential
                                implications if artificial
                                structures were confirmed on Mars would be profound; (3) The region represents a perfect
                                case study in
                                how scientific data can be interpreted differently based on different frameworks; and
                                (4) The ongoing
                                exploration of Mars continues to provide new data about this intriguing region.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>What do geologists say about the formations in Cydonia?</h4>
                            <p>
                                Geologists generally describe the features in Cydonia as natural formations consistent
                                with Martian
                                geological processes. The Face is classified as a mesa, while other features are
                                described as buttes,
                                knobs, and eroded remnants typical of the boundary between Mars' northern lowlands and
                                southern highlands.
                                The processes that likely shaped these features include impact cratering, volcanic
                                activity, wind erosion,
                                and possibly ancient water processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCydonia;