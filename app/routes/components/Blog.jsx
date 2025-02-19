import { useState } from 'react';
export default function Blog({onClose}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const blogs =[
    
    {blogid: 1, title: "Python class Functions", date: "January 15, 2024", sneakpeek: "This is a blog post about python class functions. It is a very interesting topic and I hope you enjoy it.", img: "/ragvec.png"},
    {blogid: 2, title: "Python class Functions", date: "January 15, 2024", sneakpeek: "This is a blog post about python class functions. It is a very interesting topic and I hope you enjoy it.", img: "/ragvec.png"},
    {blogid: 3, title: "Python class Functions", date: "January 15, 2024", sneakpeek: "This is a blog post about python class functions. It is a very interesting topic and I hope you enjoy it.", img: "/ragvec.png"},
    {blogid: 4, title: "Python class Functions", date: "January 15, 2024", sneakpeek: "This is a blog post about python class functions. It is a very interesting topic and I hope you enjoy it.", img: "/ragvec.png"},
    
    ]
    const handleButtonClose = () =>
        {
            onClose();
        };    
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
        <div className="main-container">
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
                            <button className="blog-read-more">Read More</button>
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