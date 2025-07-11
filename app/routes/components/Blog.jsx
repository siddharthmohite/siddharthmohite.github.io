import { useState } from 'react';
import { useNavigate } from "@remix-run/react";
import '../styles/Blog.scss';


export default function Blog({onClose}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedBlogId, setSelectedBlogId] = useState(null);
    const navigate = useNavigate(); 

    const blogs =[
    
    {blogid: 1, title: "Instance-Level Initialization", date: "January 15, 2024", sneakpeek: "🚨 Discover how a simple instance-level mistake caused chaos in our backend!", img: "/ragvec.png"},
    {blogid: 2, title: "Blog 2 Placeholder", date: "January 15, 2024", sneakpeek: "This is a blog post  placeholder for blog 2. It is a very interesting topic and I hope you enjoy it.", img: "/ragvec.png"},
    {blogid: 3, title: "Blog 3 Placeholder", date: "January 11, 2024", sneakpeek: "This is a blog post placeholder for blog 3. It is a very interesting topic and I hope you enjoy it.", img: "/ragvec.png"},
    {blogid: 4, title: "Blog 4 Placeholder", date: "January 10, 2024", sneakpeek: "This is a blog post placeholder for blog 4. It is a very interesting topic and I hope you enjoy it.", img: "/ragvec.png"},
    
    ]
    const handleButtonClose = () =>
        {
            onClose();
        };
    const handleSelectedBlogId = (id) =>{
        setSelectedBlogId(id);
        navigate(`/blogs?blogid=${id}`);
    }        
  return (
    <div className="container">
        <div className="sidebar">
            <div className="sidebar__buttons">
                <button 
                onClick={handleButtonClose}
                className="sidebar__buttons-close">

                </button>
                <button className={`sidebar__buttons-min ${isExpanded ? 'active' : ''}`}>
                    
                </button>
                <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="sidebar__buttons-max">
                    
                </button>
            </div>
        </div>
        <div className="blog-main-container">
            <div className="top-bar">
                <span className="title">Blogs</span>
            </div>
            <div className="blogs">
            {blogs.map((blog) => (
            <div className="blog-container">
                <div className="blog-post-container">
                    <div className="blog-photo-container">
                        <img className="blog-image" src={blog.img}></img>
                    </div>
                    <div className="blog-info-container">
                        <span className="blog-title">{blog.title}</span>
                        <div className="blog-sneak-peek">
                            <span className="blog-sneak-peek-text">{blog.sneakpeek}</span>
                        </div>
                        <div className="blog-divider">

                        </div>
                        <div className="blog-footer">
                            <span className="blog-date">{blog.date}</span>
                            <button 
                            onClick={() => handleSelectedBlogId(blog.blogid)}
                            className="blog-read-more">Read More</button>
                        </div>
                    </div>    
                </div>
            </div> 
            ))} 
         </div>        
        </div>
     </div>   
  );
}