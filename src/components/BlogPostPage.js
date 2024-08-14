// BlogPostPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css'; 
import './BlogPostPage.css'

const posts = [
  {
    id: 1,
    title: 'The Benefits of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy...',
    content: 'Regular dental check-ups are crucial for maintaining good oral health. They help in early detection of potential issues and ensure that your teeth and gums are healthy. Regular visits to the dentist can help prevent serious issues like cavities, gum disease, and oral cancer. During these check-ups, your dentist will clean your teeth, examine for any issues, and provide guidance on maintaining oral hygiene. It’s also an opportunity to discuss any concerns or changes in your oral health with your dentist. By making dental check-ups a routine part of your health care, you can avoid potential problems and keep your smile healthy and bright.',
    category: 'Dental Care',
    date: '2024-08-01',
    image: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42075.jpg?t=st=1723288900~exp=1723292500~hmac=6adcf18c0d019240274657b9c0907cab5bf8026368fb838ade01e8f526a4de17&w=1060',
    author: 'Dr. Jane Smith',
    relatedPosts: [
      { id: 2, title: 'Top 5 Tips for a Brighter Smile' },
      { id: 3, title: 'How to Prevent Common Dental Issues' }
    ],
    comments: [
      { id: 1, author: 'Alice Johnson', text: 'Great article! I didn’t realize how important regular check-ups are. Thanks for the info!' },
      { id: 2, author: 'Bob Lee', text: 'Very informative. I will make sure to schedule my next check-up soon.' }
    ]
  },
  // Add more posts as needed
];

const BlogPostPage = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(posts.find(post => post.id === parseInt(id)).comments || []);
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentData = { id: comments.length + 1, author: 'Anonymous', text: newComment };
      setComments([...comments, newCommentData]);
      setNewComment('');
    }
  };

  return (
    <div className="blog-post-page">
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <p><strong>Category:</strong> {post.category}</p>
          <p><strong>Date:</strong> {post.date}</p>
          <p><strong>Author:</strong> {post.author}</p>
        </div>
      </div>
      <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="social-share">
        <p>Share this post:</p>
        <a href={`https://twitter.com/share?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
      <div className="related-posts">
        <h2>Related Posts</h2>
        <ul>
          {post.relatedPosts.map(relatedPost => (
            <li key={relatedPost.id}>
              <a href={`/posts/${relatedPost.id}`}>{relatedPost.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="comments-section">
        <h2>Comments</h2>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <p><strong>{comment.author}:</strong> {comment.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Leave a comment..."
            rows="4"
            required
          />
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostPage;
