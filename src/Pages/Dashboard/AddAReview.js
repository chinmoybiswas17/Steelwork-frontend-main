import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddAReview = () => {
  const [user] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      name: user?.displayName,
      rating: event.target.rating.value,
      description: event.target.description.value,
    };

    fetch("https://alpha-steelwork-backend.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully");
        } else {
          toast.error("Some error occurred.Please try again");
        }
        event.target.reset();
      });
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
        Add A Review
      </h2>
      <div className="add-review-form">
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 sm:gap-4 lg:gap-0 mx-auto"
        >
          <div>
            <label className="label">
              <span className="label-text font-semibold pl-2">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              defaultValue={user?.displayName}
              disabled
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              placeholder="Between 1 to 5"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="relative">
            <label className="label">
              <span className="label-text font-semibold pl-2">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              placeholder="Short Description"
              required
            />
            <input
              className="btn btn-primary absolute sm:bottom-0 text-white w-full rounded-full max-w-xs block mt-4"
              type="submit"
              value="post review"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAReview;
