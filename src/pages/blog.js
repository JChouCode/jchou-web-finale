import React from 'react'
import { Link, Router } from 'components/Router'
import { useRouteData } from "react-static"

const ReactMarkdown = require("react-markdown");



export default () => {
  const { posts } = useRouteData();
  return (
    <div className="white">
      <div className="container">
        <Link to="/" className="back">
          <svg width="32" height="32" viewBox="0 0 32 32"><g fill-rule="evenodd"><path transform="rotate(45 4.001 12.985)" d="M5.364 -0.236H7.364V15.764H5.364z"></path><path transform="scale(1 -1) rotate(45 54.613 2.021)" d="M5.364 9.764H7.364V25.764H5.364z"></path><path d="M2 14H26V16H2z" transform="translate(3 1)"></path></g></svg>
          <div>Home</div>
        </Link>
        <h1>Blogs</h1>
        {
          posts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="post">
              <div>
                <h3>{post.title}</h3>
                <ReactMarkdown
                  source={post.content}
                  escapeHtml={false}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

