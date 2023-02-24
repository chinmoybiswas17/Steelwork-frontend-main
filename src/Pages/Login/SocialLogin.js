import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import google from "../../assets/google.png";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const SocialLogin = ({ children }) => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [token] = useToken(gUser);

  useEffect(() => {
    if (token) {
      toast.success("Welcome back");
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (gLoading) {
    return <Loading></Loading>;
  }
  if (gError) {
    errorElement = (
      <p className=" px-1 pb-2">
        <small className="text-red-500">{gError?.message}</small>
      </p>
    );
  }

  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };

  return (
    <section>
      {errorElement}
      <button
        className="btn text-primary bg-base-200 border-0 w-full max-w-xs"
        onClick={handleGoogleSignUp}
      >
        <img className="mr-2" src={google} alt="google" /> {children}
      </button>
    </section>
  );
};

export default SocialLogin;
