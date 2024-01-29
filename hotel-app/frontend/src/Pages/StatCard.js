// StatCard.js
import React from "react";
const StatCard = ({ title, count, icon,className, }) => {
  return (
    <div className="col-md-3 mt-4">
      <div className="stat-card   rounded-4 border-0 shadow-sm card ">
        <div className="d-flex align-items-center">
          <div className={className}>
            <p className=" fs-1 ">{icon}</p>
          </div>

          <div className=" ms-2">
            <div className="d-flex justify-content-center ">
              <h3 className="fw-light">{title}</h3>
              <p className="mt-2">{count}</p>
            </div>
            <p className="text">Je ne sais pas quoi mettre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;