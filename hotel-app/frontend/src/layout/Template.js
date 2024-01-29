import React from "react";
// import { Link } from 'react-router-dom';

function Template(props) {
  return (
    <div className="container-fluid justify-content-center  m-0 p-0">
      <div className="template d-flex ">
        <div className="col-10 col-md-2 position-fixed">
          {props.sidebar}
        </div>

        <div className="col-10 col-md-2"></div>
        <div className="col-10 contentNavbar  p-0 m-0">
          <div className="sticky-top">{props.navbar}</div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Template;
