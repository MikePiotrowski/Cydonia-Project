import React, {useState} from 'react';
import './Community.css';
import {useAppContext} from '../context/AppContext';

const Community = () => {
    const {theme} = useAppContext();
    const [activeTab, setActiveTab] = useState('forum');

    return (
        <section id="community" className={`community-section ${theme}`}>
            <div className="container">
                <h2 className="section-title">Mars Community Hub</h2>
                <p className="section-description">
                    Join our community of Mars enthusiasts to discuss anomalies, share discoveries, and collaborate on
                    mapping projects.
                </p>

                <div className="community-tabs">
                    <button
                        className={`tab-button ${activeTab === 'forum' ? 'active' : ''}`}
                        onClick={() => setActiveTab('forum')}
                        aria-selected={activeTab === 'forum'}
                        role="tab"
                    >
                        <i className="fas fa-comments"></i> Discussion Forum
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'submissions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('submissions')}
                        aria-selected={activeTab === 'submissions'}
                        role="tab"
                    >
                        <i className="fas fa-upload"></i> Image Submissions
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'mapping' ? 'active' : ''}`}
                        onClick={() => setActiveTab('mapping')}
                        aria-selected={activeTab === 'mapping'}
                        role="tab"
                    >
                        <i className="fas fa-map-marked-alt"></i> Collaborative Mapping
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'forum' && <ForumSection/>}
                    {activeTab === 'submissions' && <SubmissionsSection/>}
                    {activeTab === 'mapping' && <MappingSection/>}
                </div>
            </div>
        </section>
    );
};

// Forum Section Component
const ForumSection = () => {
    const [forumPosts, setForumPosts] = useState([
        {
            id: 1,
            author: 'MarsExplorer',
            title: 'New findings in the Cydonia region',
            content: 'I\'ve been analyzing the latest NASA images and found some interesting patterns near the Face structure.',
            date: '2023-10-15',
            replies: 8,
            tags: ['Cydonia', 'Face on Mars', 'NASA Images']
        },
        {
            id: 2,
            author: 'RedPlanetFan',
            title: 'Geometric anomalies in Pyramids area',
            content: 'The alignment of structures in the Pyramids area seems to follow a mathematical pattern similar to Earth\'s ancient sites.',
            date: '2023-10-12',
            replies: 15,
            tags: ['Pyramids', 'Geometry', 'Patterns']
        },
        {
            id: 3,
            author: 'AnomalyHunter',
            title: 'Water erosion evidence near monuments',
            content: 'Recent high-resolution images suggest possible water erosion patterns around the base of several Cydonia structures.',
            date: '2023-10-08',
            replies: 12,
            tags: ['Water', 'Erosion', 'Geology']
        }
    ]);

    const [newPostForm, setNewPostForm] = useState({
        title: '',
        content: '',
        tags: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewPostForm({
            ...newPostForm,
            [name]: value
        });
    };

    const handleSubmitPost = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        const newPost = {
            id: forumPosts.length + 1,
            author: 'CurrentUser', // Would come from authentication
            title: newPostForm.title,
            content: newPostForm.content,
            date: new Date().toISOString().split('T')[0],
            replies: 0,
            tags: newPostForm.tags.split(',').map(tag => tag.trim())
        };

        setForumPosts([newPost, ...forumPosts]);
        setNewPostForm({title: '', content: '', tags: ''});
    };

    return (
        <div className="forum-section">
            <div className="forum-header">
                <h3>Mars Anomalies Discussion Forum</h3>
                <p>Share your theories, discuss evidence, and connect with fellow researchers.</p>
            </div>

            <div className="new-post-form">
                <h4>Start a New Discussion</h4>
                <form onSubmit={handleSubmitPost}>
                    <div className="form-group">
                        <label htmlFor="post-title">Title</label>
                        <input
                            type="text"
                            id="post-title"
                            name="title"
                            value={newPostForm.title}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter a descriptive title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-content">Content</label>
                        <textarea
                            id="post-content"
                            name="content"
                            value={newPostForm.content}
                            onChange={handleInputChange}
                            required
                            placeholder="Share your thoughts, theories, or questions..."
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-tags">Tags (comma separated)</label>
                        <input
                            type="text"
                            id="post-tags"
                            name="tags"
                            value={newPostForm.tags}
                            onChange={handleInputChange}
                            placeholder="e.g., Cydonia, Face, Geology"
                        />
                    </div>
                    <button type="submit" className="submit-button">Post Discussion</button>
                </form>
            </div>

            <div className="forum-posts">
                <h4>Recent Discussions</h4>
                {forumPosts.map(post => (
                    <div key={post.id} className="forum-post">
                        <div className="post-header">
                            <h5>{post.title}</h5>
                            <div className="post-meta">
                                <span className="post-author">Posted by {post.author}</span>
                                <span className="post-date">on {post.date}</span>
                                <span className="post-replies"><i className="fas fa-comment"></i> {post.replies}</span>
                            </div>
                        </div>
                        <p className="post-content">{post.content}</p>
                        <div className="post-tags">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                        <div className="post-actions">
                            <button className="action-button"><i className="fas fa-reply"></i> Reply</button>
                            <button className="action-button"><i className="fas fa-bookmark"></i> Save</button>
                            <button className="action-button"><i className="fas fa-share"></i> Share</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Submissions Section Component
const SubmissionsSection = () => {
    const [submissions, setSubmissions] = useState([
        {
            id: 1,
            title: 'Unusual formation in Cydonia quadrangle',
            description: 'This image shows what appears to be a geometric pattern that doesn\'t match natural formation processes.',
            image: '/img/MarsSurface.jpg',
            author: 'MarsSleuth',
            date: '2023-10-14',
            votes: 24,
            comments: 7
        },
        {
            id: 2,
            title: 'Potential artificial structure near the Face',
            description: 'Located approximately 2km from the Face monument, this structure has regular angles suggesting possible artificial origin.',
            image: '/img/Marswater.jpg',
            author: 'CydoniaExplorer',
            date: '2023-10-10',
            votes: 18,
            comments: 5
        }
    ]);

    return (
        <div className="submissions-section">
            <div className="submissions-header">
                <h3>Mars Image Analysis Submissions</h3>
                <p>Upload interesting Mars images for community analysis and discussion.</p>
            </div>

            <div className="submission-form">
                <h4>Submit a Mars Image for Analysis</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="submission-title">Title</label>
                        <input type="text" id="submission-title" placeholder="Descriptive title for your image"
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="submission-description">Description</label>
                        <textarea
                            id="submission-description"
                            placeholder="Describe what you see and why it's interesting..."
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="submission-image">Upload Image</label>
                        <input type="file" id="submission-image" accept="image/*" required/>
                        <p className="form-help">Supported formats: JPG, PNG, GIF (max 5MB)</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="submission-location">Location on Mars (if known)</label>
                        <input type="text" id="submission-location"
                               placeholder="e.g., Cydonia region, coordinates, etc."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="submission-source">Image Source</label>
                        <input type="text" id="submission-source" placeholder="e.g., NASA, ESA, personal processing"
                               required/>
                    </div>
                    <button type="submit" className="submit-button">Submit for Analysis</button>
                </form>
            </div>

            <div className="recent-submissions">
                <h4>Recent Submissions</h4>
                <div className="submissions-grid">
                    {submissions.map(submission => (
                        <div key={submission.id} className="submission-card">
                            <div className="submission-image">
                                <img src={submission.image} alt={submission.title}/>
                            </div>
                            <div className="submission-details">
                                <h5>{submission.title}</h5>
                                <p className="submission-description">{submission.description}</p>
                                <div className="submission-meta">
                                    <span>By {submission.author}</span>
                                    <span>on {submission.date}</span>
                                </div>
                                <div className="submission-stats">
                                    <span><i className="fas fa-arrow-up"></i> {submission.votes} votes</span>
                                    <span><i className="fas fa-comment"></i> {submission.comments} comments</span>
                                </div>
                                <button className="view-details-button">View Analysis</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Mapping Section Component
const MappingSection = () => {
    return (
        <div className="mapping-section">
            <div className="mapping-header">
                <h3>Collaborative Mars Mapping Project</h3>
                <p>Work together to map and catalog anomalies across the Martian surface.</p>
            </div>

            <div className="map-container">
                <div className="map-placeholder">
                    <div className="map-overlay">
                        <h4>Interactive Mars Map</h4>
                        <p>Click on the map to add markers for anomalies or points of interest</p>
                        <button className="map-button">Load Full Interactive Map</button>
                    </div>
                </div>

                <div className="map-controls">
                    <div className="control-group">
                        <label>Map Type:</label>
                        <select>
                            <option>Topographic</option>
                            <option>Visual</option>
                            <option>Infrared</option>
                            <option>Elevation</option>
                        </select>
                    </div>
                    <div className="control-group">
                        <label>Filter Anomalies:</label>
                        <select>
                            <option>All Types</option>
                            <option>Geometric Structures</option>
                            <option>Possible Artifacts</option>
                            <option>Unusual Terrain</option>
                            <option>Community Verified</option>
                        </select>
                    </div>
                    <div className="control-group">
                        <label>Region:</label>
                        <select>
                            <option>Cydonia</option>
                            <option>Elysium Planitia</option>
                            <option>Olympus Mons</option>
                            <option>Valles Marineris</option>
                            <option>All Regions</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="recent-discoveries">
                <h4>Recent Community Discoveries</h4>
                <div className="discoveries-list">
                    <div className="discovery-item">
                        <div className="discovery-icon">
                            <i className="fas fa-landmark"></i>
                        </div>
                        <div className="discovery-details">
                            <h5>Aligned Structure Complex</h5>
                            <p>A series of aligned rectangular formations discovered in the southern Cydonia region.</p>
                            <div className="discovery-meta">
                                <span>Discovered by: AnomalyTeam5</span>
                                <span>Coordinates: 40.7°N, 9.8°W</span>
                                <span>Verified by 12 members</span>
                            </div>
                            <button className="view-on-map-button">View on Map</button>
                        </div>
                    </div>
                    <div className="discovery-item">
                        <div className="discovery-icon">
                            <i className="fas fa-mountain"></i>
                        </div>
                        <div className="discovery-details">
                            <h5>Geometric Mountain Formation</h5>
                            <p>An unusually regular mountain formation with apparent terracing and right angles.</p>
                            <div className="discovery-meta">
                                <span>Discovered by: MarsGeologist</span>
                                <span>Coordinates: 41.2°N, 10.1°W</span>
                                <span>Verified by 8 members</span>
                            </div>
                            <button className="view-on-map-button">View on Map</button>
                        </div>
                    </div>
                    <div className="discovery-item">
                        <div className="discovery-icon">
                            <i className="fas fa-road"></i>
                        </div>
                        <div className="discovery-details">
                            <h5>Linear Path Features</h5>
                            <p>A network of straight-line features connecting several known structures in the
                                region.</p>
                            <div className="discovery-meta">
                                <span>Discovered by: PathfinderX</span>
                                <span>Coordinates: Various (see map)</span>
                                <span>Verified by 15 members</span>
                            </div>
                            <button className="view-on-map-button">View on Map</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="join-mapping">
                <h4>Join the Mapping Project</h4>
                <p>Help us catalog and analyze potential anomalies across the Martian surface. Your contributions help
                    build our collective understanding of Mars.</p>
                <button className="join-button">Sign Up as Mapper</button>
                <button className="tutorial-button">View Mapping Tutorial</button>
            </div>
        </div>
    );
};

export default Community;
