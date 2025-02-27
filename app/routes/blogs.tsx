import React, { useEffect, useState } from "react"
import "./styles/Blogs.scss"
import { useSearchParams } from "@remix-run/react";


export default function Blogs() {
    const [searchParams] = useSearchParams();
    const blogid = searchParams.get("blogid");
    const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
    const BlogContent = [
        
        {id: 1,title:"Python Instance-Level Initialization", content: "There was a time when all of our code was relying on a static date from the backend. Or rather, I should say, it was a bug that crept into our system. This caused significant issues for the frontend since some of the logic depended on that date for displaying information to users, while other parts of our application were performing date-related operations.",
        content1: "A debugger is an essential tool for any programmer. If there's one skill every developer should master, it's how to set up and use a debugger effectively. While stepping through the debugging process, we discovered that one of our class definitions had a datetime value being assigned at the time an instance was created. Here’s an example of what that looked like:",
        img:"/ragvec.png"},
    ]

    useEffect(() => {
        if (blogid) {
            const parsedBlogId = Number(blogid);
            if (!isNaN(parsedBlogId)) {
                setSelectedBlogId(parsedBlogId);
            } else {
                setSelectedBlogId(null);
            }
        }
    }, [blogid]);
    
    return(
        <div className="blogs">
            {BlogContent.map((blog) => (
            <div className="blogs-container">
                <div className="blogs-image-container">
                    <img src={blog.img} className="blogs-image" alt="blog image"/>
                </div>
                <h1 className="title">{blog.title}</h1>
                <div className="blogs-content-container">
                    <h2 className="heading">Introduction</h2>
                    <span className="content">{blog.content}</span>
                    <h2 className="heading">Identifying the Problem</h2>
                    <span className="content">{blog.content1}</span>
                    <pre>
                        <code>
                        {`
from datetime import datetime
class Foo:
    def __init__(self, name: str, age: int):
    self.name = name
    self.age = age
    self.created = datetime.now()
                        `}
                        </code>
                    </pre>
                    <span className="content">
                        The issue was that the created attribute was assigned at the moment the class instance was created, not dynamically at request time. Since we were deploying our backend on Azure, every time a long-lived instance of this class persisted, it retained an outdated timestamp instead of generating a new one per request. This led to inconsistencies in our application.
                    </span>
                    <h2 className="heading">Solution</h2>
                    <span className="content">
                        To fix this, we ensured that the datetime value was assigned at request time rather than when the class instance was initialized. One approach was moving the datetime assignment logic outside of the class and into the API routing level.
                        Here's the corrected approach:
                    </span>
                    <pre>
                    <code>
                        {`
from datetime import datetime
    def create_foo(name: str, age: int):
        return {
            "name": name,
            "age": age,
            "created": datetime.now()
    }`}
                    </code>
                    </pre>
                    <span className="content">
                    Now, every time a request is made, a fresh timestamp is generated instead of relying on a timestamp set at the time of class instantiation.
Alternatively, if we wanted to stick with the class-based approach but ensure a fresh timestamp, we could do this:
                    </span>
                    <pre>
                        <code>
                            {`
class Foo:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        self.created = datetime.now()

    @classmethod
    def create(cls, name: str, age: int):
        return cls(name, age)`}
                        </code>
                    </pre>
                    <span className="content">
                    This ensures that the timestamp is correctly assigned each time a new instance is explicitly created.
                        </span>   
                </div>    
        </div>
))}
        </div>    
    );


};