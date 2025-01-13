import axios from 'axios';

const BASE_URL = 'http://localhost:8080/posts';

export const fetchPosts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const fetchPostById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

export const createPost = async (post) => {
    const response = await axios.post(BASE_URL, post);
    return response.data;
};

export const updatePost = async (id, post) => {
    const response = await axios.put(`${BASE_URL}/${id}`, post);
    return response.data;
};

export const deletePost = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    
    if (confirmed) {
        try {
            // Perform the delete operation
            await axios.delete(`${BASE_URL}/${id}`);
            alert("Post deleted successfully!");
        } catch (error) {
            alert("There was an error deleting the post.");
            console.error(error);
        }
    } else {
        alert("Delete operation cancelled.");
    }
};
