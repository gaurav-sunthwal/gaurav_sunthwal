import "../Styles/Work.css";
import { Link } from "react-router-dom";

// imgs

import img1 from "../Img/project5.jpg";

function Work() {
  return (
    <>
      <div className="work">
        <div className="tital">
          <h1>Work</h1>
        </div>
        <div className="weorkSec">
          <WorkCard
            img={img1}
            tital="Video Editing Project 1"
            discraprtiom="Some quick example text to build on the card title and make up the bulk of the card's content."
            link = "https://www.youtube.com/watch?v=DU1vYbM6xXc&t=1s&ab_channel=GauravSunthwalVlogs"
          />
          <WorkCard
            img={img1}
            tital="Video Editing Project 2"
            discraprtiom="Some quick example text to build on the card title and make up the bulk of the card's content."
            link = "https://www.youtube.com/watch?v=DU1vYbM6xXc&t=1s&ab_channel=GauravSunthwalVlogs"
          />
          <WorkCard
            img={img1}
            tital="Video Editing Project 3"
            discraprtiom="Some quick example text to build on the card title and make up the bulk of the card's content."
            link = "https://www.youtube.com/watch?v=DU1vYbM6xXc&t=1s&ab_channel=GauravSunthwalVlogs"
          />
        </div>
      </div>
    </>
  );
}

function WorkCard(props) {
  return (
    <>
      <div className="workCard">
        <img src={props.img} alt="" />
        <div className="cardInfo">
          <div className="cardText">
            <h3 className="cardTital">{props.tital}</h3>
            <p className="cardPara">{props.discraprtiom}</p>
          </div>
          <Link to={props.link}>
            <button className="btn">Click To See</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Work;
