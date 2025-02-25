import React, { useEffect, useState } from "react"
import "./styles/Blogs.scss"
import { useSearchParams } from "@remix-run/react";

export default function blogs() {
    const [searchParams] = useSearchParams();
    const blogid = searchParams.get("blogid");
    const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

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

    const BlogContent = [
        {id: 1, title:"Blog 1", content: "This is the content of blog 1", img:"/ragvec.png"},

    ]
    return(
        <div className="blogs">
            <h1>this is a blogs page</h1>
        </div>    

    )


};