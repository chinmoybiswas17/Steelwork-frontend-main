import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { email, displayName } = user;

  const {
    data: currentUser,
    isLoading,
    refetch,
  } = useQuery(["user", email], () =>
    fetch(`https://alpha-steelwork-backend.onrender.com/users/${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { education, address, contact, hobby, faceBook, linkedIn } =
    currentUser || "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      education: event.target.education.value,
      address: event.target.address.value,
      contact: event.target.contact.value,
      linkedIn: event.target.linkedIn.value,
      faceBook: event.target.faceBook.value,
      hobby: event.target.hobby.value,
    };

    fetch(`https://alpha-steelwork-backend.onrender.com/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your profile has been updated successfully");
        } else {
          toast.error("We are sorry. Some error occurred. Please try again");
        }

        refetch();
      });
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
        My Profile
      </h2>
      <div className="profile">
        <div className="current-profile mt-6 mb-20">
          <div className="card max-w-sm bg-base-100 shadow-xl px-4 lg:px-0">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <FontAwesomeIcon
                    className="pt-2 pl-4"
                    icon={faUser}
                    size="4x"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </figure>
            <div className="lg:pl-4 py-8">
              <h2 className="card-title text-2xl uppercase">{displayName}</h2>
              <hr className="border-2 my-6 border-accent mr-4" />
              <p className="my-3">
                <span className="font-semibold">Email :</span>
              </p>
              <p>{email}</p>
              <p className="my-3">
                <span className="font-semibold">Education :</span>{" "}
              </p>
              <p>{education ? education : "Not Provided"}</p>
              <p className="my-3">
                <span className="font-semibold">Address :</span>{" "}
              </p>
              <p>{address ? address : "Not Provided"}</p>
              <p className="my-3">
                <span className="font-semibold">Contact :</span>{" "}
              </p>
              <p>{contact ? contact : "Not Provided"}</p>
              <p className="my-3">
                <span className="font-semibold">Hobby :</span>{" "}
              </p>
              <p>{hobby ? hobby : "Not Provided"}</p>
              <p className="my-3">
                <span className="font-semibold">FaceBook :</span>{" "}
              </p>
              <p>{faceBook ? faceBook : "Not Provided"}</p>
              <p className="my-3">
                <span className="font-semibold">LinkedIn :</span>{" "}
              </p>
              <p>{linkedIn ? linkedIn : "Not Provided"}</p>
            </div>
          </div>
        </div>
        <div className="update-profile">
          <form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-2 sm:gap-4 lg:gap-0 mx-auto"
          >
            <div>
              <label className="label">
                <span className="label-text font-semibold pl-2">Education</span>
              </label>
              <input
                type="text"
                name="education"
                placeholder="Your Education"
                className="input rounded-md w-full max-w-xs pl-1 ml-2"
                defaultValue={education}
              />
              <label className="label">
                <span className="label-text font-semibold pl-2">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input rounded-md w-full max-w-xs pl-1 ml-2"
                defaultValue={address}
              />
              <label className="label">
                <span className="label-text font-semibold pl-2">
                  Contact No
                </span>
              </label>
              <input
                type="number"
                name="contact"
                placeholder="Your Contact No"
                className="input rounded-md w-full max-w-xs pl-1 ml-2"
                defaultValue={contact}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold pl-2">LinkedIn</span>
              </label>
              <input
                type="text"
                name="linkedIn"
                placeholder="LinkedIn Profile Link"
                className="input rounded-md w-full max-w-xs pl-1 ml-2"
                defaultValue={linkedIn}
              />
              <label className="label">
                <span className="label-text font-semibold pl-2">FaceBook</span>
              </label>
              <input
                type="text"
                name="faceBook"
                placeholder="FaceBook Profile Link"
                className="input rounded-md w-full max-w-xs pl-1 ml-2"
                defaultValue={faceBook}
              />
              <label className="label">
                <span className="label-text font-semibold pl-2">Hobby</span>
              </label>
              <input
                type="text"
                name="hobby"
                placeholder="Your hobbies"
                className="input rounded-md w-full max-w-xs pl-1 ml-2"
                defaultValue={hobby}
              />

              <input
                className="btn btn-primary text-white w-full rounded-full max-w-xs block my-4 mx-auto sm:mx-0"
                type="submit"
                value="Update profile"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
