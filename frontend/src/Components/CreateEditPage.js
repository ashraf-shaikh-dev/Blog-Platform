import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPost, updatePost, fetchPostById } from '../api/api';

const CreateEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null); // Added error state

    useEffect(() => {
        if (id) {
            fetchPostById(id)
                .then(post => {
                    setTitle(post.title);
                    setContent(post.content);
                })
                .catch(err => setError('Error fetching post.'));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, content };
        if (id) {
            updatePost(id, post)
                .then(() => navigate(`/posts/${id}`))
                .catch(() => setError('Error updating post.'));
        } else {
            createPost(post)
                .then(() => navigate('/'))
                .catch(() => setError('Error creating post.'));
        }
    };

    // Function to convert newline characters to <br /> tags for the preview
    const renderContent = (content) => {
        return content.split('\n').map((line, index) => (
            <p key={index} style={styles.previewText}>{line}</p>
        ));
    };

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
            color: '#007bff',
            fontSize: '2em',
        },
        formContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#555',
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            minHeight: '150px',
            resize: 'vertical',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '16px',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        error: {
            color: 'red',
            textAlign: 'center',
            marginTop: '10px',
        },
        previewContainer: {
            marginTop: '30px',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        previewHeading: {
            textAlign: 'center',
            color: '#007bff',
            fontSize: '1.5em',
            marginBottom: '20px',
        },
        previewText: {
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#333',
            marginBottom: '10px',
        },
        postContent: {
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#333',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }
    };

    const handleButtonHover = (e) => {
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
    };

    const handleButtonMouseLeave = (e) => {
        e.target.style.backgroundColor = styles.button.backgroundColor;
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.heading}>{id ? 'Edit Post' : 'Create Post'}</h1>
                {error && <p style={styles.error}>{error}</p>} {/* Displaying error message if any */}
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Title</label>
                        <input
                            style={styles.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Content</label>
                        <textarea
                            style={styles.textarea}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={handleButtonHover}
                        onMouseLeave={handleButtonMouseLeave}
                    >
                        Save
                    </button>
                </form>
                <div style={styles.previewContainer}>
                    <h2 style={styles.previewHeading}>Post Preview</h2>
                    <div>{renderContent(content)}</div>
                </div>
            </div>
        </div>
    );
};

export default CreateEditPage;
