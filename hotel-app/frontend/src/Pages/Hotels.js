import React from "react";
import SousHotels from "./SousHotels";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.png'
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import "./Dashboard.css";
import BoutonModal from "./BoutonModal";

const Hotels = () => {
  return (
    <div className="container-fluid d-flex   flex-wrap  ">
      <div className="row">
        <div className="p-2 bg-white shadow-sm">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex">
              <h1 className="fw-light">Hôtels 8</h1>
            </div>
            <div className="d-flex">
              <BoutonModal />
            </div>
          </div>
        </div>
        <SousHotels
          image={image1}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
        <SousHotels
          image={image2}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
        <SousHotels
          image={image2}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
        <SousHotels
          image={image2}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
        <SousHotels
          image={image3}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
        <SousHotels
          image={image4}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
        <SousHotels
          image={image4}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
        <SousHotels
          image={image4}
          lieu={"Boulevard Martin Luther King Dakar, 11500"}
          count={"Formulaires"}
        />
      </div>
    </div>
  );
};

export default Hotels;
