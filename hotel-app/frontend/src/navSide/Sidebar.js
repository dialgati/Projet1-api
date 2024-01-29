import React from 'react'
import paper from '../images/paper.png'
import { MdDashboard } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { PiUserCircleDuotone } from "react-icons/pi";


function Sidebar() {
  return (
    <div className='sidebar-masque'>
      <div className="sidebar d-flex flex-wrap justify-content-center text-white">
        <div className="bas">
          <div className="d-flex justify-content-center align-items-center">
            <img className="logo" src={paper} alt="" />
            <p className="ms-3 text-white fw-bolder fs-4">Sénégal Hôtel</p>
          </div>
          <h5 className="mt-4 fw-light">Principal</h5>
          <div className="d-flex mt-4 change  ">
            <Link
              to="/admin/Dashboard"
              className="text-decoration-none text-light"
            >
              <MdDashboard className="fs-3" />
              <span className="ms-3 text-decoration-none text-light" href="#">
                Dashboard
              </span>
            </Link>
          </div>
          <div className="d-flex mt-2 change ">
            <Link
              to="/admin/hotels"
              className="text-decoration-none text-light"
            >
              <FaComputer className="fs-3" />
              <span className="ms-3 text-decoration-none text-light" href="#">
                Liste des hôtels
              </span>
            </Link>
          </div>

          <div className="d-flex profil mt-5 align-items-center">
            <div className="truc">
              <PiUserCircleDuotone className="fs-1 mb-3" />
            </div>
            <div className="ms-2">
              <p className="fs-5">Yaya Dia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar