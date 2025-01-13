import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../api/api';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(setPosts);
    }, []);

    // Internal CSS styles
    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            minHeight: '100vh',
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNWD8NZH5BIk3_7FaAAIx5Scgw00427e-sw&s")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            color: '#fff', 
        },
        heading: {
            textAlign: 'center',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        },
        createPostButton: {
            display: 'block',
            margin: '20px auto',
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'center',
            textDecoration: 'none',
        },
        link: {
            color: 'white',
            textDecoration: 'none',
        },
        postList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            listStyleType: 'none',
            padding: 0,
        },
        postItem: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent box
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            color: '#333',
        },
        postItemHover: {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
        },
        postTitle: {
            margin: '0 0 10px',
            color: '#007bff',
            textDecoration: 'none',
        },
        postContent: {
            color: '#555',
        },
        postDate: {
            color: '#777',
            fontStyle: 'italic',
        },
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = styles.postItemHover.transform;
        e.currentTarget.style.boxShadow = styles.postItemHover.boxShadow;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Blog Posts</h1>
            <button style={styles.createPostButton}>
                <Link to="/create-post" style={styles.link}>Create New Post</Link>
            </button>
            <ul style={styles.postList}>
                {posts.map(post => (
                    <li
                        key={post.id}
                        style={styles.postItem}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2>
                            <Link to={`/posts/${post.id}`} style={styles.postTitle}>
                                {post.title}
                            </Link>
                        </h2>
                        <p style={styles.postContent}>
                            {post.content.substring(0, 100)}...
                        </p>
                        <p style={styles.postDate}>
                            {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
