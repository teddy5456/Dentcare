import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Complete blog data
const posts = [
  {
    id: 1,
    title: 'The Benefits of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    content: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    category: 'Dental Care',
    date: '2024-08-01',
    image: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42075.jpg?t=st=1723288900~exp=1723292500~hmac=6adcf18c0d019240274657b9c0907cab5bf8026368fb838ade01e8f526a4de17&w=1060'
  },
  {
    id: 2,
    title: 'How to Choose the Right Toothpaste for You',
    excerpt: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    content: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    category: 'Dental Care',
    date: '2024-08-02',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 3,
    title: 'The Importance of Flossing Daily',
    excerpt: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    content: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    category: 'Oral Hygiene',
    date: '2024-08-03',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 4,
    title: 'The Benefits of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    content: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    category: 'Dental Care',
    date: '2024-08-01',
    image: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42075.jpg?t=st=1723288900~exp=1723292500~hmac=6adcf18c0d019240274657b9c0907cab5bf8026368fb838ade01e8f526a4de17&w=1060'
  },
  {
    id: 5,
    title: 'How to Choose the Right Toothpaste for You',
    excerpt: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    content: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    category: 'Dental Care',
    date: '2024-08-02',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 6,
    title: 'The Importance of Flossing Daily',
    excerpt: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    content: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    category: 'Oral Hygiene',
    date: '2024-08-03',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 7,
    title: 'The Benefits of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    content: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    category: 'Dental Care',
    date: '2024-08-01',
    image: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42075.jpg?t=st=1723288900~exp=1723292500~hmac=6adcf18c0d019240274657b9c0907cab5bf8026368fb838ade01e8f526a4de17&w=1060'
  },
  {
    id: 8,
    title: 'How to Choose the Right Toothpaste for You',
    excerpt: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    content: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    category: 'Dental Care',
    date: '2024-08-02',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 9,
    title: 'The Importance of Flossing Daily',
    excerpt: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    content: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    category: 'Oral Hygiene',
    date: '2024-08-03',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 10,
    title: 'The Benefits of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    content: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    category: 'Dental Care',
    date: '2024-08-01',
    image: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42075.jpg?t=st=1723288900~exp=1723292500~hmac=6adcf18c0d019240274657b9c0907cab5bf8026368fb838ade01e8f526a4de17&w=1060'
  },
  {
    id: 11,
    title: 'How to Choose the Right Toothpaste for You',
    excerpt: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    content: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    category: 'Dental Care',
    date: '2024-08-02',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 13,
    title: 'The Importance of Flossing Daily',
    excerpt: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    content: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    category: 'Oral Hygiene',
    date: '2024-08-03',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 14,
    title: 'The Benefits of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    content: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    category: 'Dental Care',
    date: '2024-08-01',
    image: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42075.jpg?t=st=1723288900~exp=1723292500~hmac=6adcf18c0d019240274657b9c0907cab5bf8026368fb838ade01e8f526a4de17&w=1060'
  },
  {
    id: 15,
    title: 'How to Choose the Right Toothpaste for You',
    excerpt: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    content: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    category: 'Dental Care',
    date: '2024-08-02',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 16,
    title: 'The Importance of Flossing Daily',
    excerpt: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    content: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    category: 'Oral Hygiene',
    date: '2024-08-03',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 17,
    title: 'The Benefits of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    content: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    category: 'Dental Care',
    date: '2024-08-01',
    image: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42075.jpg?t=st=1723288900~exp=1723292500~hmac=6adcf18c0d019240274657b9c0907cab5bf8026368fb838ade01e8f526a4de17&w=1060'
  },
  {
    id: 18,
    title: 'How to Choose the Right Toothpaste for You',
    excerpt: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    content: 'Choosing the right toothpaste can make a significant difference in your oral health. There are various types of toothpaste available, each designed to address different dental needs...',
    category: 'Dental Care',
    date: '2024-08-02',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  {
    id: 19,
    title: 'The Importance of Flossing Daily',
    excerpt: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    content: 'Flossing daily is an essential part of oral hygiene. It helps remove food particles and plaque from between the teeth and below the gumline...',
    category: 'Oral Hygiene',
    date: '2024-08-03',
    image: 'https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical-drilling-patient-s-teeth-clinic_627829-13721.jpg?t=st=1723285835~exp=1723289435~hmac=bbf72ad76f4054d72338faf3b4fdbdc27f55785479708d5c3dec96b9fe7ad70c&w=1060'
  },
  // Additional blog posts can be added here
];



const BlogLandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterPosts(e.target.value, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterPosts(searchTerm, category);
  };

  const filterPosts = (searchTerm, category) => {
    const filtered = posts.filter(post =>
      (category === 'All' || post.category === category) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="blog-landing-page">
      <header className="blog-header">
        <div className="top-bar">
          <h2>Blog Posts</h2>
          <div className="menu-button" onClick={() => document.querySelector('.menu').classList.toggle('show')}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="menu">
          <div className="filter-section">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={handleSearch}
              aria-label="Search blog posts"
            />
          </div>
          <h2>Categories</h2>
          <ul>
            <li><button onClick={() => handleCategoryChange('All')}>All</button></li>
            <li><button onClick={() => handleCategoryChange('Dental Care')}>Dental Care</button></li>
            <li><button onClick={() => handleCategoryChange('Oral Hygiene')}>Oral Hygiene</button></li>
            <li><button onClick={() => handleCategoryChange('Cosmetic Dentistry')}>Cosmetic Dentistry</button></li>
            <li><button onClick={() => handleCategoryChange('Orthodontics')}>Orthodontics</button></li>
          </ul>

          <h2>Archives</h2>
          <ul>
            <li><button onClick={() => handleCategoryChange('August 2024')}>August 2024</button></li>
            <li><button onClick={() => handleCategoryChange('July 2024')}>July 2024</button></li>
            <li><button onClick={() => handleCategoryChange('June 2024')}>June 2024</button></li>
          </ul>
        </div>
      </header>

                <div className='blog-main-content-outer'>
                    <main className="blog-main-content">
                    <section className="featured-blog">
            {filteredPosts.length > 0 && (
                <div className="featured-card">
                        <div className='label1'>
                    <h3>featured</h3>
                    </div>
                <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="featured-image" />
                <div className="featured-content">
                    <h2>{filteredPosts[0].title}</h2>
                    <p>{filteredPosts[0].excerpt}
                    <a href={`/blog/${filteredPosts[0].id}`} className="read-more">Read More</a>
                    </p>
                    <p className="post-date">{new Date(filteredPosts[0].date).toDateString()}</p>
                </div>
                </div>
            )}
            </section>


            <section className="blog-posts">
            {paginatedPosts.length > 0 ? (
                <div className="blog-grid">
                {paginatedPosts.map(post => (
                    <div className="blog-card" key={post.id}>
                    <img src={post.image} alt={post.title} className="blog-image" />
                    <div className="blog-content">
                        <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                        <p className="post-date">{new Date(post.date).toDateString()}</p>
                    </div>
                    </div>
                ))}
                </div>
            ) : (
                <p>No posts found matching your search.</p>
            )}
            </section>


        </main>
      </div>
      <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                >
                {index + 1}
                </button>
            ))}
            </div>
    </div>
  );
};

export default BlogLandingPage;
