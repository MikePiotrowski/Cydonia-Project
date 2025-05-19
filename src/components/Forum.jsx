import React, {useCallback, useEffect, useRef, useState} from 'react';
import {VariableSizeList as List} from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import {useAppContext} from '../context/AppContext';
import useDebounce from '../hooks/useDebounce';
import './Forum.css';

// Sample data for forum posts
const SAMPLE_POSTS = [
    {
        id: 1,
        title: 'The Face on Mars: New Evidence',
        author: 'MarsExplorer',
        date: '2023-05-15',
        content: 'Recent high-resolution images from the Mars Reconnaissance Orbiter show new details of the Face on Mars. The symmetry is remarkable when viewed from certain angles.',
        category: 'Cydonia',
        tags: ['Face on Mars', 'NASA', 'MRO'],
        likes: 42,
        comments: 15
    },
    {
        id: 2,
        title: 'Geometric Patterns in Cydonia Region',
        author: 'AnomalyHunter',
        date: '2023-05-10',
        content: 'I\'ve been analyzing the geometric relationships between structures in the Cydonia region. The mathematical precision suggests these may not be natural formations.',
        category: 'Structures',
        tags: ['Geometry', 'Patterns', 'Analysis'],
        likes: 38,
        comments: 23
    },
    {
        id: 3,
        title: 'Water Evidence Near Anomalous Structures',
        author: 'AquaMars',
        date: '2023-05-05',
        content: 'The presence of ancient shorelines near the pyramidal structures in Cydonia suggests these formations may have been built near water sources, similar to Earth civilizations.',
        category: 'Water',
        tags: ['Ancient Mars', 'Water', 'Civilization'],
        likes: 56,
        comments: 31
    },
    {
        id: 4,
        title: 'Lighting Conditions and Optical Illusions',
        author: 'ScienceFirst',
        date: '2023-04-28',
        content: 'Many of the so-called anomalies can be explained by specific lighting conditions creating optical illusions. This is a well-documented phenomenon in planetary science.',
        category: 'Science',
        tags: ['Debunking', 'Optical Illusions', 'Science'],
        likes: 29,
        comments: 47
    },
    {
        id: 5,
        title: 'The D&M Pyramid: Artificial or Natural?',
        author: 'PyramidResearcher',
        date: '2023-04-22',
        content: 'The D&M Pyramid in Cydonia shows signs of symmetry and alignment that are difficult to explain through natural erosion processes alone.',
        category: 'Structures',
        tags: ['D&M Pyramid', 'Symmetry', 'Analysis'],
        likes: 51,
        comments: 19
    },
    {
        id: 6,
        title: 'Mars Anomalies in NASA Archives',
        author: 'ArchiveDigger',
        date: '2023-04-15',
        content: 'I\'ve been going through old NASA archives and found some interesting anomalies that weren\'t widely publicized. Check out these images from the Viking missions.',
        category: 'Research',
        tags: ['NASA', 'Viking', 'Archives'],
        likes: 63,
        comments: 27
    },
    {
        id: 7,
        title: 'Comparing Earth and Mars Structures',
        author: 'ComparativeAnalyst',
        date: '2023-04-08',
        content: 'When we compare certain structures on Mars with ancient monuments on Earth, we find surprising similarities in design and astronomical alignment.',
        category: 'Comparison',
        tags: ['Earth', 'Ancient Monuments', 'Alignment'],
        likes: 44,
        comments: 33
    },
    {
        id: 8,
        title: 'Geological Explanations for Cydonia',
        author: 'MarsGeologist',
        date: '2023-04-01',
        content: 'From a geological perspective, the formations in Cydonia can be explained by natural processes including erosion, deposition, and tectonic activity specific to Mars.',
        category: 'Science',
        tags: ['Geology', 'Natural Formation', 'Science'],
        likes: 37,
        comments: 41
    }
];

// Sample categories for the forum
const CATEGORIES = [
    {id: 'all', name: 'All Categories', count: 8},
    {id: 'Cydonia', name: 'Cydonia Region', count: 1},
    {id: 'Structures', name: 'Anomalous Structures', count: 2},
    {id: 'Water', name: 'Water Evidence', count: 1},
    {id: 'Science', name: 'Scientific Analysis', count: 2},
    {id: 'Research', name: 'Research & Archives', count: 1},
    {id: 'Comparison', name: 'Earth Comparisons', count: 1}
];

const Forum = () => {
    // Get theme from context
    const {theme} = useAppContext();

    // State for forum posts and UI
    const [posts, setPosts] = useState(SAMPLE_POSTS);
    const [filteredPosts, setFilteredPosts] = useState(SAMPLE_POSTS);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebounce('', 300);
    const [sortOption, setSortOption] = useState('newest');

    // State for new post form
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        category: 'Cydonia',
        tags: ''
    });

    // State for virtualized list
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [itemHeights, setItemHeights] = useState({});

    // Refs for the virtualized list
    const listRef = useRef(null);
    const infiniteLoaderRef = useRef(null);
    const rowHeightCache = useRef({});

    // Reset row height cache when posts change
    const resetRowHeightCache = useCallback(() => {
        if (listRef.current) {
            rowHeightCache.current = {};
            listRef.current.resetAfterIndex(0);
        }
    }, []);

    // Filter posts when category or search term changes
    useEffect(() => {
        let result = [...posts];

        // Filter by category
        if (activeCategory !== 'all') {
            result = result.filter(post => post.category === activeCategory);
        }

        // Filter by search term
        if (debouncedSearchTerm) {
            const searchLower = debouncedSearchTerm.toLowerCase();
            result = result.filter(post =>
                post.title.toLowerCase().includes(searchLower) ||
                post.content.toLowerCase().includes(searchLower) ||
                post.author.toLowerCase().includes(searchLower) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
        }

        // Sort posts
        if (sortOption === 'newest') {
            result.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortOption === 'oldest') {
            result.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortOption === 'popular') {
            result.sort((a, b) => b.likes - a.likes);
        } else if (sortOption === 'comments') {
            result.sort((a, b) => b.comments - a.comments);
        }

        setFilteredPosts(result);

        // Reset virtualized list
        setLoadedPosts([]);
        setHasMore(true);

        // Reset row height cache
        resetRowHeightCache();

        // Reset scroll position when filters change
        if (listRef.current) {
            listRef.current.scrollTo(0);
        }

        // Reset InfiniteLoader if it exists
        if (infiniteLoaderRef.current) {
            infiniteLoaderRef.current.resetLoadMoreItemsCache();
        }

    }, [activeCategory, debouncedSearchTerm, sortOption, posts, resetRowHeightCache]);

    // Update debounced search term
    useEffect(() => {
        setDebouncedSearchTerm(searchTerm);
    }, [searchTerm, setDebouncedSearchTerm]);

    // Load initial posts
    useEffect(() => {
        loadMorePosts();
    }, [filteredPosts, loadMorePosts]);

    // Estimate the height of a post based on its content
    const estimatePostHeight = useCallback((post) => {
        if (!post) return 300; // Default height

        // Base height for post container
        let height = 200;

        // Add height based on title length
        height += Math.min(post.title.length * 0.5, 50);

        // Add height based on content length
        const contentLines = Math.ceil(post.content.length / 50); // Estimate ~50 chars per line
        height += contentLines * 24; // ~24px per line

        // Add height for tags
        height += post.tags.length > 0 ? 50 : 0;

        // Add some buffer
        height += 50;

        return height;
    }, []);

    // Get or calculate the height for a specific item
    const getItemHeight = useCallback((index) => {
        // If we have a cached height, use it
        if (rowHeightCache.current[index] !== undefined) {
            return rowHeightCache.current[index];
        }

        // Otherwise estimate based on content
        const post = loadedPosts[index];
        const height = post ? estimatePostHeight(post) : 300;

        // Cache the height
        rowHeightCache.current[index] = height;

        return height;
    }, [loadedPosts, estimatePostHeight]);

    // Function to load more posts for infinite scrolling
    const loadMorePosts = useCallback(() => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);

        // Simulate loading delay
        setTimeout(() => {
            const currentLength = loadedPosts.length;
            const nextBatch = filteredPosts.slice(currentLength, currentLength + 10);

            if (nextBatch.length === 0) {
                setHasMore(false);
            } else {
                setLoadedPosts(prev => {
                    const newPosts = [...prev, ...nextBatch];

                    // Reset cache for new items
                    if (listRef.current) {
                        listRef.current.resetAfterIndex(currentLength);
                    }

                    return newPosts;
                });
            }

            setIsLoading(false);
        }, 300);
    }, [filteredPosts, isLoading, hasMore, loadedPosts]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewPost(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmitPost = (e) => {
        e.preventDefault();

        // Create new post
        const newPostObj = {
            id: posts.length + 1,
            title: newPost.title,
            author: 'CurrentUser', // In a real app, this would come from authentication
            date: new Date().toISOString().split('T')[0],
            content: newPost.content,
            category: newPost.category,
            tags: newPost.tags.split(',').map(tag => tag.trim()),
            likes: 0,
            comments: 0
        };

        // Add to posts
        setPosts(prev => [newPostObj, ...prev]);

        // Reset form
        setNewPost({
            title: '',
            content: '',
            category: 'Cydonia',
            tags: ''
        });

        // Show the new post by setting the appropriate category
        setActiveCategory(newPostObj.category);
    };

    // Check if an item is loaded
    const isItemLoaded = useCallback(index => {
        return !hasMore || index < loadedPosts.length;
    }, [hasMore, loadedPosts.length]);

    // Total number of items to render
    const itemCount = hasMore ? loadedPosts.length + 1 : loadedPosts.length;

    // Render a loading placeholder
    const renderLoadingPlaceholder = useCallback(() => (
        <div className="forum-post loading-placeholder" style={{height: '200px'}}>
            <div className="post-header-placeholder">
                <div className="title-placeholder"></div>
                <div className="meta-placeholder"></div>
            </div>
            <div className="content-placeholder">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="footer-placeholder">
                <div className="tags-placeholder"></div>
                <div className="actions-placeholder"></div>
            </div>
        </div>
    ), []);

    // Render each post item in the virtualized list
    const renderPost = useCallback(({index, style}) => {
        // If the item is not loaded, show a placeholder
        if (!isItemLoaded(index)) {
            return (
                <div style={style}>
                    {renderLoadingPlaceholder()}
                </div>
            );
        }

        const post = loadedPosts[index];
        if (!post) return null;

        return (
            <div className="forum-post" style={style} key={post.id}>
                <div className="post-header">
                    <h5>{post.title}</h5>
                    <div className="post-meta">
            <span className="post-author">
              <i className="fas fa-user"></i> {post.author}
            </span>
                        <span className="post-date">
              <i className="fas fa-calendar-alt"></i> {post.date}
            </span>
                        <span className="post-category">
              <i className="fas fa-folder"></i> {post.category}
            </span>
                    </div>
                </div>

                <div className="post-content">
                    <p>{post.content}</p>
                </div>

                <div className="post-footer">
                    <div className="post-tags">
                        {post.tags.map((tag, i) => (
                            <span className="tag" key={i}>#{tag}</span>
                        ))}
                    </div>

                    <div className="post-actions">
                        <button className="action-button">
                            <i className="fas fa-heart"></i> {post.likes}
                        </button>
                        <button className="action-button">
                            <i className="fas fa-comment"></i> {post.comments}
                        </button>
                        <button className="action-button">
                            <i className="fas fa-share"></i> Share
                        </button>
                    </div>
                </div>
            </div>
        );
    }, [loadedPosts, isItemLoaded, renderLoadingPlaceholder]);

    return (
        <section id="forum" className={`forum-page ${theme}`}>
            <div className="container">
                <h2 className="section-title">Mars Anomalies Discussion Forum</h2>
                <p className="section-description">
                    Join the conversation about anomalous structures, geological features, and potential evidence of
                    past civilization on Mars.
                </p>

                <div className="forum-layout">
                    {/* Sidebar */}
                    <div className="forum-sidebar">
                        {/* Search Box */}
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search posts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search posts"
                            />
                            <i className="fas fa-search"></i>
                        </div>

                        {/* Categories */}
                        <div className="categories-list">
                            <h3>Categories</h3>
                            <ul>
                                {CATEGORIES.map(category => (
                                    <li
                                        key={category.id}
                                        className={activeCategory === category.id ? 'active' : ''}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        {category.name}
                                        <span className="category-count">{category.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Forum Stats */}
                        <div className="forum-stats">
                            <h3>Forum Statistics</h3>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <div className="stat-value">{posts.length}</div>
                                    <div className="stat-label">Total Posts</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">42</div>
                                    <div className="stat-label">Active Users</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">156</div>
                                    <div className="stat-label">Total Comments</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-value">7</div>
                                    <div className="stat-label">Categories</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="forum-main">
                        {/* Controls */}
                        <div className="forum-controls">
                            <div className="forum-sort">
                                <label htmlFor="sort-select">Sort by:</label>
                                <select
                                    id="sort-select"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="comments">Most Comments</option>
                                </select>
                            </div>
                        </div>

                        {/* New Post Form */}
                        <form className="new-post-form" onSubmit={handleSubmitPost}>
                            <h3>Create New Post</h3>

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={newPost.title}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter post title"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={newPost.content}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Share your thoughts..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={newPost.category}
                                        onChange={handleInputChange}
                                    >
                                        {CATEGORIES.filter(cat => cat.id !== 'all').map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tags">Tags (comma separated)</label>
                                    <input
                                        type="text"
                                        id="tags"
                                        name="tags"
                                        value={newPost.tags}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Cydonia, Research, Evidence"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="submit-button">
                                <i className="fas fa-paper-plane"></i> Post
                            </button>
                        </form>

                        {/* Posts List */}
                        <div className="forum-posts">
                            <h4>Discussion Posts {filteredPosts.length > 0 && `(${filteredPosts.length})`}</h4>

                            {filteredPosts.length === 0 ? (
                                <div className="no-posts-message">
                                    <i className="fas fa-search"></i>
                                    <p>No posts found matching your criteria. Try adjusting your filters or create a new
                                        post!</p>
                                </div>
                            ) : (
                                <div className="virtualized-list-container">
                                    <InfiniteLoader
                                        ref={infiniteLoaderRef}
                                        isItemLoaded={isItemLoaded}
                                        itemCount={itemCount}
                                        loadMoreItems={loadMorePosts}
                                        threshold={5}
                                    >
                                        {({onItemsRendered, ref}) => (
                                            <List
                                                ref={(list) => {
                                                    ref(list);
                                                    listRef.current = list;
                                                }}
                                                height={600}
                                                width="100%"
                                                itemCount={itemCount}
                                                itemSize={getItemHeight}
                                                onItemsRendered={onItemsRendered}
                                                overscanCount={3}
                                            >
                                                {renderPost}
                                            </List>
                                        )}
                                    </InfiniteLoader>

                                    {!hasMore && loadedPosts.length > 0 && (
                                        <div className="end-message">
                                            <p>You've reached the end of the posts</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Forum;
