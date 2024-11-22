/* eslint-disable react/prop-types */
import "./Animation.css";

function Network({isWifi}) {
  return (
    <div>
      <div className="mycircles text-center">
        <div className="mycircle1"></div>
        <div className="mycircle2"></div>
        <div className="mycircle3"></div>

        {isWifi &&  <i className="fa-solid fa-wifi" style={{fontSize:"10rem",marginTop:"30px",zIndex:"100"}}></i>
    }
      </div>
    </div>
  );
}

export default Network;
