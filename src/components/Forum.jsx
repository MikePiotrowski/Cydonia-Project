import React, {useState} from 'react';
import './Forum.css';
import {useAppContext} from '../context/AppContext';
import useDebounce from '../hooks/useDebounce';

const Forum = () => {
    const {theme} = useAppContext();
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
        },
        {
            id: 4,
            author: 'MarsArchaeologist',
            title: 'Potential artificial structures in Utopia Planitia',
            content: 'Recent analysis of images from the Utopia Planitia region shows what could be remnants of artificial structures buried under the surface.',
            date: '2023-10-05',
            replies: 23,
            tags: ['Utopia Planitia', 'Structures', 'Archaeology']
        },
        {
            id: 5,
            author: 'CosmicResearcher',
            title: 'Mathematical relationships between Cydonia monuments',
            content: 'I\'ve been studying the spatial relationships between the Face, D&M Pyramid, and other structures in Cydonia and found some intriguing mathematical ratios.',
            date: '2023-10-03',
            replies: 19,
            tags: ['Mathematics', 'Geometry', 'Cydonia']
        }
    ]);

    const [newPostForm, setNewPostForm] = useState({
        title: '',
        content: '',
        tags: ''
    });

    const [categories, setCategories] = useState([
        {id: 'all', name: 'All Topics', count: 42},
        {id: 'cydonia', name: 'Cydonia Region', count: 18},
        {id: 'face', name: 'The Face on Mars', count: 12},
        {id: 'pyramids', name: 'Martian Pyramids', count: 8},
        {id: 'geology', name: 'Martian Geology', count: 15},
        {id: 'nasa', name: 'NASA Missions', count: 10},
        {id: 'theories', name: 'Alternative Theories', count: 7}
    ]);

    const [activeCategory, setActiveCategory] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [searchTerm, setSearchTerm] = useDebounce('', 300);

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

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter posts based on active category and search term
    const filteredPosts = forumPosts.filter(post => {
        const matchesCategory = activeCategory === 'all' ||
            post.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()));

        const matchesSearch = searchTerm === '' ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    return (
        <section id="forum" className={`forum-page ${theme}`}>
            <div className="container">
                <h2 className="section-title">Mars Anomalies Discussion Forum</h2>
                <p className="section-description">
                    Join our community of Mars enthusiasts to discuss anomalies, share discoveries, and explore the
                    mysteries of the Red Planet.
                </p>

                <div className="forum-layout">
                    <div className="forum-sidebar">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search discussions..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <button className="search-button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>

                        <div className="categories-list">
                            <h3>Categories</h3>
                            <ul>
                                {categories.map(category => (
                                    <li
                                        key={category.id}
                                        className={activeCategory === category.id ? 'active' : ''}
                                        onClick={() => handleCategoryChange(category.id)}
                                    >
                                        <span className="category-name">{category.name}</span>
                                        <span className="category-count">{category.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="forum-stats">
                            <h3>Forum Statistics</h3>
                            <div className="stat-item">
                                <i className="fas fa-users"></i>
                                <div className="stat-details">
                                    <span className="stat-value">1,248</span>
                                    <span className="stat-label">Members</span>
                                </div>
                            </div>
                            <div className="stat-item">
                                <i className="fas fa-comments"></i>
                                <div className="stat-details">
                                    <span className="stat-value">3,842</span>
                                    <span className="stat-label">Posts</span>
                                </div>
                            </div>
                            <div className="stat-item">
                                <i className="fas fa-clock"></i>
                                <div className="stat-details">
                                    <span className="stat-value">Today, 10:42 AM</span>
                                    <span className="stat-label">Latest Post</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="forum-main">
                        <div className="forum-controls">
                            <button className="new-topic-button">
                                <i className="fas fa-plus"></i> New Topic
                            </button>
                            <div className="forum-sort">
                                <label>Sort by:</label>
                                <select>
                                    <option>Newest First</option>
                                    <option>Most Replies</option>
                                    <option>Recently Updated</option>
                                    <option>Most Viewed</option>
                                </select>
                            </div>
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
                            <h4>Discussions {activeCategory !== 'all' && `in ${categories.find(c => c.id === activeCategory)?.name}`}</h4>

                            {filteredPosts.length === 0 ? (
                                <div className="no-posts-message">
                                    <i className="fas fa-search"></i>
                                    <p>No discussions found matching your criteria. Try adjusting your search or
                                        category filter.</p>
                                </div>
                            ) : (
                                filteredPosts.map(post => (
                                    <div key={post.id} className="forum-post">
                                        <div className="post-header">
                                            <h5>{post.title}</h5>
                                            <div className="post-meta">
                                                <span className="post-author">Posted by {post.author}</span>
                                                <span className="post-date">on {post.date}</span>
                                                <span className="post-replies"><i
                                                    className="fas fa-comment"></i> {post.replies}</span>
                                            </div>
                                        </div>
                                        <p className="post-content">{post.content}</p>
                                        <div className="post-tags">
                                            {post.tags.map((tag, index) => (
                                                <span key={index} className="tag"
                                                      onClick={() => handleCategoryChange(tag.toLowerCase())}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className="post-actions">
                                            <button className="action-button"><i className="fas fa-reply"></i> Reply
                                            </button>
                                            <button className="action-button"><i className="fas fa-bookmark"></i> Save
                                            </button>
                                            <button className="action-button"><i className="fas fa-share"></i> Share
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="pagination">
                            <button className="pagination-button"><i className="fas fa-chevron-left"></i></button>
                            <button className="pagination-button active">1</button>
                            <button className="pagination-button">2</button>
                            <button className="pagination-button">3</button>
                            <span className="pagination-ellipsis">...</span>
                            <button className="pagination-button">10</button>
                            <button className="pagination-button"><i className="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Forum;
