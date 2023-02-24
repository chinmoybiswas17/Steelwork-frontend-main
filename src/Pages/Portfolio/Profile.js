import React from "react";
import profile from "../../assets/avatar.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="card max-w-sm bg-base-100 mx-auto">
        <div className="avatar justify-center my-6">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profile} alt="avatar" className="rounded-xl" />;
          </div>
        </div>
        <div className="pb-6">
          <h2 className="font-semibold text-xl text-center mb-2">
            Fuad Mahmud Thakur Saad
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
