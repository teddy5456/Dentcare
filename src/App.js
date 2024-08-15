// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Book from './components/Book';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import TeamComponent from './components/TeamComponent';
import { Analytics } from '@vercel/analytics/react';
import BlogPostPage from './components/BlogPostPage'; // Import the BlogPostPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<TeamComponent />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostPage />} /> {/* Add this route */}
          <Analytics />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
