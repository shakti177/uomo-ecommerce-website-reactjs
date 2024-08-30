import React from "react";

import "./BlogList.css";

import BlogData from "../../../Data/BlogData";
import { Link } from "react-router-dom";

const BlogList = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="blogListSection">
        <div className="blogListHeaderContainer">
          <div className="blogListHeader">
            <h2>The Blog</h2>
            <div className="blogListHeaderCategories">
              <p>ALL</p>
              <p>COMPANY</p>
              <p className="activeCategory">FASHION</p>
              <p>STYLE</p>
              <p>TRENDS</p>
              <p>BEAUTY</p>
            </div>
          </div>
        </div>
        <div className="blogPostListContainer">
          {BlogData.map((blogPost) => (
            <div className="blogPost">
              <div className="blogPostThumb">
                <img src={blogPost.blogThumbnail} alt="blogPost" />
              </div>
              <div className="blogPostContent">
                <div className="blogPostContentDate">
                  <p>by admin</p>
                  <p>{blogPost.blogDate}</p>
                </div>
                <div className="blogPostContentHeading">
                  <Link to="/BlogDetails" onClick={scrollToTop}>
                    {blogPost.blogHeading}
                  </Link>
                </div>
                <div className="blogPostContentDescription">
                  <p>
                    Midst one brought greater also morning green saying had
                    good. Open stars day let over gathered, grass face one every
                    light of under.
                  </p>
                </div>
                <div className="blogPostContentReadMore">
                  <Link to="/BlogDetails" onClick={scrollToTop}>
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="blogListShowMore" onClick={scrollToTop}>
          Show More
        </p>
      </div>
    </>
  );
};

export default BlogList;
