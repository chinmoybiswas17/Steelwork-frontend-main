import { faAt, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProfileDetails = () => {
  return (
    <section className="m-4 lg:max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:justify-items-center bg-white py-14">
        <div className="text-center hover:bg-amber-100 hover:scale-110 duration-200 py-8 px-2 rounded-md w-full">
          <FontAwesomeIcon icon={faAt} size="4x"></FontAwesomeIcon>
          <p className="py-2 text-2xl">Email</p>
          <hr className="border w-72 mt-2 border-primary mx-auto" /> <br />
          <p className="text-xl font-thin pt-0 mt-0">thakursaad613@gmail.com</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="text-center hover:bg-amber-100 hover:scale-110 duration-200 py-8 px-2 rounded-md w-full">
          <FontAwesomeIcon icon={faGraduationCap} size="4x"></FontAwesomeIcon>
          <p className="py-2 text-2xl">
            Educational Background <br />
          </p>
          <hr className="border w-72 my-2 border-primary mx-auto" />
          <p className="text-base font-thin">HSC</p>
          <p className="text-base font-thin">
            Bangladesh Gas Fields School & College
          </p>
          <hr className="border w-72 my-2 border-primary mx-auto" />
          <p className="text-base font-thin">SSC</p>
          <p className="text-base font-thin">
            Sarail Annada Government High School
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
