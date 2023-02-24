import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div id="contactUs" className="hero mb-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:max-w-lg lg:ml-20 lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6 sm:text-xl">
              We will contact you back in 5 hours max. Please check your email
              in 5 hours. You can also contact our regional distributor
              directly.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    The reason you are contacting
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Reason"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-full text-white animate-pulse">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
