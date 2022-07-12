import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portfolioService from "../../services/portfolioPosts";
import "./index.css";

function Portfolio() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    portfolioService.getAll().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="fade-in container mx-auto p-5 flex flex-wrap justify-center">
      {posts.map((post) => (
        <Link
          className="basis-full sm:basis-1/2 lg:basis-1/3 p-5"
          to={`/portfolio/${post.id}`}
          key={post.id}
        >
          <div className="secondary-link flex flex-col items-center text-center h-full p-5">
            <div className="post-miniature primary-border overflow-hidden w-full aspect-square flex justify-center items-center mb-5">
              <img
                className="w-full h-auto"
                src={
                  post.img
                    ? post.img
                    : "https://via.placeholder.com/250x250/E15D74/ECE2D0"
                }
                alt=""
              />
            </div>
            <p className="post-title text-lg sm:text-2xl font-bold">
              {post.title}
            </p>
            <p>{post.body[0].content.substring(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Portfolio;
