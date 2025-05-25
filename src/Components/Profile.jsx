import React from "react";
import "../profile.css";

const Profile = () => {
  let user = {};
  user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="main">
      <div className="content-area3">
        <div className="heading-profile">
          <p>Account Setting</p>
        </div>
        <div className="profile-area">
          <div>
            <img src="/undraw_finance-guy-avatar_vhop.svg" alt="profile" />
          </div>
          <div className="details">
            <p>{user.name}</p>
            <p className="email">{user.email}</p>
          </div>
        </div>

        <div className="texts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            cupiditate tenetur aut, beatae consequuntur veniam{" "}
          </p>
        </div>

        <hr className="dotted-hr"/>
      </div>
    </div>
  );
};

export default Profile;
