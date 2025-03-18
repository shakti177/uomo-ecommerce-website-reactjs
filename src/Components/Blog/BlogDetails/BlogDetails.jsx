import React from "react";

import "./BlogDetails.css";

import blogdetail1 from "../../../Assets/Blog/blogDetail1.jpg";
import blogimage1 from "../../../Assets/Blog/blogDetail2.jpg";
import blogimage2 from "../../../Assets/Blog/blogDetail3.jpg";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const BlogDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="blogDetailsSection">
        <div className="blogDetailsSectionContainer">
          <div className="blogDetailsHeading">
            <h2>5 Tips to Increase Your Online Sales</h2>
            <div className="blogDetailsMetaData">
              <span>by admin</span>
              <span>May 19, 2023</span>
              <span>Trends</span>
            </div>
          </div>
          <div className="blogDetailsFeaturedImg">
            <img src={blogdetail1} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit
              posuere lobortis consequat faucibus aliquam metus. Ornare
              consequat, vulputate sit maecenas mauris urna sed fringilla. Urna
              fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              Facilisis quis vulputate sem gravida lacus, justo placerat.
            </p>
            <h5>Sed do eiusmod tempor incididunt ut labore</h5>
            <p>
              Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.
              Brought second Made. Be. Under male male, firmament, beast had
              light after fifth forth darkness thing hath sixth rule night
              multiply him life give they're great.
            </p>
            <div className="blogDetailsContentBullets">
              <div className="blogDetailsContentBulletscontent">
                <h5>Why choose product?</h5>
                <p>
                  <ul>
                    <li>Creat by cotton fibric with soft and smooth</li>
                    <li>
                      Simple, Configurable (e.g. size, color, etc.), bundled
                    </li>
                    <li>Downloadable/Digital Products, Virtual Products</li>
                  </ul>
                </p>
              </div>
              <div className="blogDetailsContentBulletscontent">
                <h5>Sample Number List</h5>
                <p>
                  <ol>
                    <li>Creat by cotton fibric with soft and smooth</li>
                    <li>
                      Simple, Configurable (e.g. size, color, etc.), bundled
                    </li>
                    <li>Downloadable/Digital Products, Virtual Products</li>
                  </ol>
                </p>
              </div>
            </div>
            <p>
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
          <div className="blogDetailsContentImg">
            <img src={blogimage1} alt="" />
            <img src={blogimage2} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit
              posuere lobortis consequat faucibus aliquam metus. Ornare
              consequat, vulputate sit maecenas mauris urna sed fringilla. Urna
              fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              Facilisis quis vulputate sem gravida lacus, justo placerat.
            </p>
            <p>
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
          <div className="share-buttons">
            <button className="share-button facebook">
              <FaFacebookF /> Share on Facebook
            </button>
            <button className="share-button twitter">
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className="share-button pinterest">
              <FaPinterest /> Share on Pinterest
            </button>
            <button className="share-button more">
              <FaPlus size={20} />
            </button>
          </div>
          <div className="blogDetailsNextPrev">
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon"
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST</p>
              </div>
              <p>Given Set was without from god divide rule Hath</p>
            </div>
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon2"
                onClick={scrollToTop}
              >
                <p>NEXT POST</p>
                <GoChevronRight size={20} />
              </div>
              <p style={{ textAlign: "right" }}>
                Tree earth fowl given moveth deep lesser after
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
