import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PostPage from './Components/PostPage';
import CreateEditPage from './Components/CreateEditPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/create-post" element={<CreateEditPage />} />
            <Route path="/edit/:id" element={<CreateEditPage />} />
        </Routes>
    </Router>
);

export default App;
