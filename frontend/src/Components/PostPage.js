import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchPostById, deletePost } from '../api/api';

const PostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetchPostById(id).then(setPost).catch((err) => {
            // Handle errors (e.g., post not found)
            console.error("Error fetching post: ", err);
            setPost(null);
        });
    }, [id]);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deletePost(id).then(() => navigate('/'));
        }
    };

    const renderContent = (content) => {
        // Convert newlines to <br /> tags for better readability
        return content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ));
    };

    if (!post) return <p>Loading or post not found...</p>;

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
        postContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent box
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        heading: {
            color: '#007bff',
            fontSize: '2em',
            marginBottom: '20px',
        },
        content: {
            fontSize: '16px',
            color: '#555',
            marginBottom: '20px',
        },
        date: {
            color: '#777',
            fontStyle: 'italic',
            marginBottom: '20px',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '5px',
            width: '200px',
            display: 'inline-block',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.postContainer}>
                <h1 style={styles.heading}>{post.title}</h1>
                {/* Render the content properly, handling newlines */}
                <div style={styles.content}>
                    {renderContent(post.content)}
                </div>
                <p style={styles.date}>
                    <em>{new Date(post.createdAt).toLocaleDateString()}</em>
                </p>
                <button
                    style={styles.button}
                    onClick={() => navigate(`/edit/${id}`)}
                >
                    Edit
                </button>
                <button
                    style={styles.button}
                    onClick={handleDelete}
                >
                    Delete
                </button>
                {/* Use Link for navigation without page reload */}
                <Link to="/">
                    <button style={styles.button}>
                        View Another Posts
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PostPage;
