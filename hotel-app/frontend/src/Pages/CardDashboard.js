import React from "react";
import StatCard from "./StatCard";
import { IoMdMailOpen } from "react-icons/io";
import { BsPaypal } from "react-icons/bs";
import  "./Dashboard.css";

import { FaUserFriends } from "react-icons/fa";

const CardDashboard = () => {
  return (
    <div className="container-fluid flex-wrap ">
      <div className="row justify-content-center  gap-2">
        <div className="p-1 bg-white shadow-sm">
          <h1 className="fw-light">Bienvenue sur Hotel Sénégal</h1>
          <p className="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <StatCard
          title="125"
          icon={<IoMdMailOpen />}
          count={"Formulaires"}
          className={"violet"}
        />
        <StatCard
          title="40"
          icon={<BsPaypal />}
          count={"Messages"}
          className={"vert"}
        />
        <StatCard
          title="600"
          icon={<FaUserFriends />}
          count={"utilisateurs"}
          className={"jaune"}
        />
        <StatCard
          title="25"
          icon={<IoMdMailOpen />}
          count={"E-mails"}
          className={"rouge"}
        />
        <StatCard
          title="40"
          icon={<BsPaypal />}
          count={"Hotels"}
          className={"sombre"}
        />
        <StatCard
          title="02"
          icon={<FaUserFriends />}
          count={"Entites"}
          className={"blue"}
        />
      </div>
    </div>
  );
};

export default CardDashboard;
