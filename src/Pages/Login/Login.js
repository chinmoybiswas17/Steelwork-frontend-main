import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import wave from "../../assets/wave.svg";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
import Icon from "./Icon";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  // firebase hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      toast.success("Welcome back");
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = (
      <p className=" px-1 pb-2">
        <small className="text-red-500">{error?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <section
      style={{
        background: `url(${wave})`,
        backgroundSize: "cover",
      }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="md:grid md:grid-cols-2 items-center justify-items-center">
        <div className="card w-80 md:w-96 bg-base-100 shadow-xl md:my-8">
          <div className="card-body">
            <h2 className="text-5xl font-extrabold text-center text-primary">
              Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input border-r-0 border-l-0 border-t-0 border-b-1 border-gray-300 rounded-none focus:rounded-lg w-full max-w-xs pl-1"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input border-r-0 border-l-0 border-t-0 border-b-1 border-gray-300 rounded-none focus:rounded-lg w-full max-w-xs pl-1"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be more than 5 characters",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorElement}
              <input
                className="btn bg-gradient-to-r from-primary border-0 w-full max-w-xs"
                type="submit"
                value="login"
              />
            </form>
            <p className="p-1">
              <small>
                New to Alpha Steelwork ?{" "}
                <Link className="text-primary font-semibold" to="/signUp">
                  Sign Up
                </Link>
              </small>
            </p>
            <div className="divider text-sm">OR</div>
            <SocialLogin>Continue with google</SocialLogin>
          </div>
        </div>
        <div className="hidden md:block">
          <Icon />
        </div>
      </div>
    </section>
  );
};

export default Login;
