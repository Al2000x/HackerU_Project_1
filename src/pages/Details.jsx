import React from "react";
import "../css_work/About.css";
import ProfilePic from "../media/ProfilePic.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselImg1 from "../media/Bootstrap.png";
import CarouselImg2 from "../media/Javascript.png";
import CarouselImg3 from "../media/HTML5.png";
import CarouselImg4 from "../media/css3.png";
import CarouselImg5 from "../media/React-icon.png";
import CarouselImg6 from "../media/AXIOS.png";

const Details = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div className="text-center">
      <a href="https://reactjs.org/" target="_blank">
        <img className="carouselImg" src={CarouselImg5} alt="React-icon" />
      </a>
    </div>,
    <div className="text-center">
      <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
        <img className="carouselImg" src={CarouselImg3} alt="HTML5" />
      </a>
    </div>,
    <div className="text-center">
      <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
        <img className="carouselImg" src={CarouselImg4} alt="css3" />
      </a>
    </div>,
    <div className="text-center">
      <a href="https://www.javascript.com/" target="_blank">
        <img className="carouselImg" src={CarouselImg2} alt="Javascript" />
      </a>
    </div>,
    <div className="text-center">
      <a href="https://axios-http.com/docs/intro" target="_blank">
        <img className="axiosImg" src={CarouselImg6} alt="bootstrap" />
      </a>
    </div>,
    <div className="text-center">
     <span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
      </span>
      <a href="https://getbootstrap.com/" target="_blank">
        <img className="carouselImg" src={CarouselImg1} alt="bootstrap" />
      </a>
    </div>,
  ];
  return (
    <div className="mt-3 details">
      <div className="infoDiv">
        <div className="answerSide1">
          <h1>This is Me!</h1>
          <div className="text-center picDiv">
            <img src={ProfilePic} className="AlexPic " alt="AlexPic" />
          </div>
        </div>
        <div className="questionSide1 ">
          <h4 className="question-text1">Hello, my name is alex,<br /> And i'm the creator of this site,<br />  
           I am learning js with react,<br />  and c sharp currently but <br />  branching into other stuff too! <br /> Tanks for stepping by!
          </h4>
        </div>
        <div className="answerSide ">
          <h1>What is this site?</h1>
        </div>
        <div className="questionSide">
          <h4 className="question-text2">this is my first project on creating a website <br /> although still not connected to a DB added, <br />Also this site serves for alot of experimenting</h4>
        </div>
      </div>

      <div className="infoDiv">
        <div className="answerSide1">
          <h1>
            what softwares <br /> were used on this site?
            <br />
            scroll between them!
            <span className="fs-6 text"><br />*psst try to click on them</span>
          </h1>

          <div className="text-center picDiv"></div>
        </div>
        <div className="questionSide1">
          <div className="carousell">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </div>
        </div>
        <div className="answerSide">
          <h1>Want to stalk me?</h1>
        </div>
        <div className="questionSide ">
          <h4 className="question-text2" >
            you can follow all of my socials through the <br />links in the footer
            </h4>
          </div>
      </div>
    </div>
  );
};

export default Details;
