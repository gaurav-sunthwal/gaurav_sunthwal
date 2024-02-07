import "../Styles/Work.css";
import { Link } from "react-router-dom";

// imgs

import img1 from "../Img/project5.jpg";
import FiverrSellerWidget from "./FiverrSellerWidget";

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
            link="https://www.youtube.com/watch?v=DU1vYbM6xXc&t=1s&ab_channel=GauravSunthwalVlogs"
          />
          <WorkCard
            img={img1}
            tital="Video Editing Project 2"
            discraprtiom="Some quick example text to build on the card title and make up the bulk of the card's content."
            link="https://www.youtube.com/watch?v=DU1vYbM6xXc&t=1s&ab_channel=GauravSunthwalVlogs"
          />
          <WorkCard
            img={img1}
            tital="Video Editing Project 3"
            discraprtiom="Some quick example text to build on the card title and make up the bulk of the card's content."
            link="https://www.youtube.com/watch?v=DU1vYbM6xXc&t=1s&ab_channel=GauravSunthwalVlogs"
          />
        </div>
          <div className="freelansing">
            <FiverrSellerWidget />
            <FiverrSellerWidget />
            
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

// <div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
//      <a itemprop='url' href=https://www.fiverr.com/gauravsunthwal rel="nofollow" target="_blank" style='display: inline-block;'>
//         <div class='fiverr-seller-content' id='fiverr-seller-widget-content-a2870f98-aff7-4310-9e0b-a333e1c3390e' itemprop='contentURL' style='display: none;'></div>
//         <div id='fiverr-widget-seller-data' style='display: none;'>
//             <div itemprop='name' >gauravsunthwal</div>
//             <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
//             <div itemprop='jobtitle'>Seller</div>

//         </div>
//     </a>
// </div>

// <script id='fiverr-seller-widget-script-a2870f98-aff7-4310-9e0b-a333e1c3390e' src='https://widgets.fiverr.com/api/v1/seller/gauravsunthwal?widget_id=a2870f98-aff7-4310-9e0b-a333e1c3390e' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>
