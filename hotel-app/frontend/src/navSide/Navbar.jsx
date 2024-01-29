import React from 'react'
import { Link} from 'react-router-dom';

import { FaRegBell } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { PiUserCircleDuotone } from "react-icons/pi";

function Navbar() {
  return (
    <div className="">
      <nav class="navbar shadow-sm bg-white navbar-expand-lg justify-content-center align-items-center">
        <div class="container-fluid align-items-center justify-content-center ">
          <p class="navbar-brand fs-4 text-center  fw-bold">Dashboard</p>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex position-relative" role="search">
              <input
                class="form-control text-secondary focus me-5 rounded-4"
                type="search"
                placeholder="Rechercher..."
                aria-label="Search"
              />
            </form>
          </div>
          <div className="d-flex">
            <div className="dr fs-4">
              <FaRegBell />
            </div>
            <div className="dr mx-3">
              <PiUserCircleDuotone className="fs-1" />
            </div>
            <div className="dr fs-4">
              <Link to="connexion" className="text-black">
                <PiSignOutBold />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;