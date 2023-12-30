import "../Styles/Home.css";
import me from "../Img/me.jpeg";
import "animate.css";
// import project1 from "../Img/project1.webp";
// import project2 from "../Img/project2.webp";
// import project3 from "../Img/project3.webp";
import { useEffect } from "react";
import AboveFooter from "./AboveFooter";
// import VideoViewer from "./VideoViewer";
// import { Link } from "react-router-dom";
import React, { useState } from "react";

function Home() {
  // const observer = new IntersectionObserver((entries)=>{
  //   entries.forEach((entry)=>{
  //     console.log(entry);
  //     if (entry.isIntersecting){
  //       entry.target.className.add("show")
  //     }
  //     else{
  //       entry.target.className.remove("show")
  //     }
  //   })
  // })
  // const hiddenElement = document.querySelectorAll(".hidden")
  // hiddenElement.forEach((el) => observer.observe(el))
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const closePopup = () => {
    setPopupContent(null);
    setShowPopup(false);
  };
  return (
    <>
      <div className="home">
        <div className="homeText animate__animated animate__backInLeft">
          <div className="bigText animate__backInLeft">
            <h1>Designing emotional digital experiences that people love</h1>
          </div>
          <div className="imgText">
            <div className="homeImg">
              <img src={me} alt="" />
            </div>
            <div className="otherText-1">
              <p>
              Passionate Computer Science student at MIT-WPU, adept in web development (ReactJS, HTML, CSS, Node.js). Eager to learn, innovate, and collaborate for impactful tech solutions. Let's connect and explore the exciting possibilities! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="scrollingText hidden">
        <div className="mainCont">
          <div className="container">
            <MovingTextRightToLeft
              text={
                "Software • Web  • Cybersecurity • Machine Learning "
              }
            />
            <MovingTextLeftToRight
              text={"Full-Stack  • Code • Artificial Intelligence • Full-Stack "}
            />
          </div>
        </div>
      </div>

      <div
        className="workSec animate__slideInUp hidden"
      >
        <div className="tital">
          <h1>Featured work</h1>
        </div>
        <div className="cardSec">
          <ul className="list">
            <li
              className="item"
              onClick={() =>
                openPopup(
                  <iframe
                    width="368"
                    height="655"
                    src="https://www.youtube.com/embed/VdKaBBogK2s"
                    title="my first MacBook air m1 | MacBook air M1 | apple MacBook air |  MacBook unboxing | Gaurav&#39;s MacBook"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                )
              }
            ></li>
            <li
              className="item"
              onClick={() =>
                openPopup(
                  <iframe
                    width="368"
                    height="655"
                    src="https://www.youtube.com/embed/n_s8AL9s9hU"
                    title="New mini vlog by Gaurav Sunthwal | mini vlog by GAURAV SUNTHWAL|  Brahmastra mini vlog"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                )
              }
            ></li>
            <li
              className="item"
              onClick={() =>
                openPopup(
                  <iframe
                    width="368"
                    height="655"
                    src="https://www.youtube.com/embed/E8qJqLlQydE"
                    title="mini vlog #short #reel"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                )
              }
            ></li>
            <li
              className="item"
              onClick={() =>
                openPopup(
                  <iframe
                    width="368"
                    height="655"
                    src="https://www.youtube.com/embed/aoVlibQmr6w"
                    title="so amazing year 2022 is going to end 😟 #happynewyear #2023"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                )
              }
            ></li>
            <li
              className="item"
              onClick={() =>
                openPopup(
                  <iframe
                    width="950"
                    height="534"
                    src="https://www.youtube.com/embed/u_nOPBrj9VE"
                    title="EP 02 Business Mastery Series | By Sandeep Maheshwari | Hindi"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                )
              }
            ></li>
          </ul>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span onClick={closePopup} className="close-button">
              &times;
            </span>
            <div className="video">{popupContent}</div>
          </div>
        </div>
      )}
      <div className="AboveFooterSec">
        <AboveFooter />
      </div>
    </>
  );
  
}

const MovingTextRightToLeft = (props) => {
  useEffect(() => {
    const scrollingText = document.getElementById("scrollingTextRightToLeft");

    const updateTextPosition = () => {
      const scrollPosition = window.scrollY;
      scrollingText.style.transform = `translateX(${-scrollPosition / 6}px)`;
      requestAnimationFrame(updateTextPosition);
    };

    updateTextPosition();

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateTextPosition);
    };
  }, []); // Empty dependency array ensures that the effect runs only once (on mount)

  return (
    <div className="moving-text" id="scrollingTextRightToLeft">
      <h1 className="leftToRight flotingText">{props.text}</h1>
    </div>
  );
};

const MovingTextLeftToRight = (props) => {
  useEffect(() => {
    const scrollingText = document.getElementById("scrollingTextLeftToRight");

    const updateTextPosition = () => {
      const scrollPosition = window.scrollY;
      scrollingText.style.transform = `translateX(${scrollPosition / 6}px)`;
      requestAnimationFrame(updateTextPosition);
    };

    // Initial positioning
    updateTextPosition();

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateTextPosition);
    };
  }, []); // Empty dependency array ensures that the effect runs only once (on mount)

  return (
    <div className="moving-text" id="scrollingTextLeftToRight">
      <h1 className="RightToLeft flotingText">{props.text}</h1>
    </div>
  );
};

export default Home;
