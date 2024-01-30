import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

 
export default function Navbar(props) {
  const [text, setText] = useState("Light");
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: 'rgb(255,255,255)',
    backgroundImage: 'linear-gradient(152deg, rgba(255,255,255,1) 58%, rgba(48,171,62,1) 100%)',
    backgroundRepeat: 'no-repeat'
  });

  useEffect(() => {
    document.body.style.backgroundColor = mystyle.backgroundColor;
    document.body.style.backgroundImage = mystyle.backgroundImage;
  }, [mystyle.backgroundColor, mystyle.backgroundImage]);

  function togglebutton() {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        background: "rgb(0,0,0)",
        backgroundImage:
          "linear-gradient(152deg, rgba(0,0,0,1) 54%, rgba(253,187,45,1) 100%)",
          backgroundRepeat: 'no-repeat'
      });
      setText("Dark");
      document.body.style.backgroundColor = mystyle.backgroundColor;
      document.body.style.backgroundImage = mystyle.backgroundImage;
      document.body.style.color = "white";
      document.querySelector(".form-control").style.backgroundColor = "white";
      document.querySelector(".form-control").style.color = "black";
      document.title = "Rudy's Text Revisor - Dark";
    } else {
      setMystyle({
        color: "black",
        backgroundColor: 'rgb(255,255,255)',
        backgroundImage: 'linear-gradient(152deg, rgba(255,255,255,1) 58%, rgba(48,171,62,1) 100%)',
        backgroundRepeat: 'no-repeat'
      });
      document.body.style.backgroundColor = mystyle.backgroundColor;
      document.body.style.backgroundImage = mystyle.backgroundImage;
      document.querySelector(".form-control").style.backgroundColor = "black";
      document.querySelector(".form-control").style.color = "white";
      document.body.style.color = "black";
      document.title = "Rudy's Text Revisor - Light";
      setText("Light");
    }
  }

  return (
    <>
      <nav className="navbar" style={{paddingTop: "7px",backgroundColor: "#212121",paddingBottom: "2px"}} >
        <div className="container-fluid">
          <div className="navbar-brand text-light fs-1" style={{ fontFamily: "'Amatic SC', sans-serif"}} >{props.title}</div> 
                    <div className="d-flex me-auto mb-2 mb-lg-0 ">
     {/* <a className="navbar-brand text-light fs-1"  style={{ fontFamily: "'Amatic SC', sans-serif", marginRight: '20px', marginLeft: '16px'}} aria-current="page" href="#">{props.HomeTitle}</a> */}
    {/* <a className="navbar-brand text-light fs-1"  style={{ fontFamily: "'Amatic SC', sans-serif"}} href="#">{props.aboutTitle}</a> */}
                     </div>
            <div className="form-check form-switch h4">
              <input className="form-check-input my-3"type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={togglebutton} />
              <p className="text-white my-3 fs-4" style={{fontFamily: "'Amatic SC', sans-serif"}}>{text}</p>
            </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  buttonValue: PropTypes.string,
};
