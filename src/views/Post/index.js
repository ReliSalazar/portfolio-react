import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import portfolioService from "../../services/portfolioPosts";
import blogService from "../../services/blogPosts";
import PostSection from "./PostSection";
import Header from "./Header";
import "./index.css";

function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [body, setBody] = useState([{ contentType: "", content: "" }]);

  useEffect(() => {
    if (params.service === "portfolio") {
      portfolioService.getPost(params.postId).then((post) => {
        setPost(post);
        setBody(post.body);
      });
    } else {
      blogService.getPost(params.postId).then((post) => {
        setPost(post);
        setBody(post.body);
      });
    }
  }, [params.postId, params.service]);

  return (
    <div className="fade-in p-5 container mx-auto flex flex-col">
      <Header src={post.header} />

      <div className="flex">
        <h1 className="title text-3xl font-bold mb-2">{post.title}</h1>
      </div>
      <div className="flex mb-5 border-bottom-drk">
        <p className="date px-1">
          {post.date ? post.date : ""}
          {post.editDate ? ` | edited on ${post.editDate}` : ""}
        </p>
        {post.author ? <p className="px-1">— {post.author}</p> : null}
      </div>

      <div className="section flex flex-row flex-wrap">
        {body.map((section, i) => (
          <div
            className={`container p-2 basis-full ${
              section.contentType === "note"
                ? "sm:basis-1/4 self-center"
                : "sm:basis-3/4"
            }`}
            key={`${post.id}-section-${i}`}
          >
            <PostSection type={section.contentType} content={section.content} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
