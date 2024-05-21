import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import google from "../assets/google.jpg";
import microsoft from "../assets/microsoft.jpg";
import personswithgraph from "../assets/personswithgraph.jpg";
import { account } from "../config/appwritetest";

export default function Signin() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signup");
  };
  const [formData, setFormData] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async () => {
    account
      .deleteSession("current")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
    try {
      setIsLoading(true);
      await account.createEmailPasswordSession(formData.email);
      navigate("/signup");
      // toast.success("success");
    } catch (error) {
      // toast.error("Please try again later");
      setError(error.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { email, value } = e.target;
    setFormData({ ...formData, [email]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!isLoading && formData.email) {
      loginUser();
    } else {
      setError("Email is required.");
      // toast.error("Email and password are required.");
    }
  };

  return (
    <div className="container text-center pt-5">
      <div className="row align-items-start">
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center mb-3">
            <div className="circle"></div>
            <h5 className="m-0 me-3 hrtool">HR TOOL</h5>
            <h5 className="home_text">Home</h5>
          </div>
          <div className="start_free1 mb-1">START FOR FREE</div>
          <div className="new_account1 d-flex">
            Login to HR Tool
            <div className="circle1"></div>
          </div>
          <div className="a_login">
            create a new account?{" "}
            <span className="login_here" onClick={handleLoginClick}>
              Sign up here
            </span>
          </div>
          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              loginUser();
            }}
          >
            <div className="row mb-2"></div>
            <div className="row mb-4">
              <div className="col-12 col-md-8 position-relative">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-md-8">
                <button
                  type="submit"
                  onClick={loginUser}
                  className="submit w-100"
                >
                  Continue
                </button>
              </div>
            </div>

            <h8
              className="line"
              style={{
                marginRight: "215px",
                color: "#1E2A60",
              }}
            >
              ━━━━━━━━━━━━━━━━━━━━ <b>Login with</b> ━━━━━━━━━━━━━━━━━━━━
            </h8>

            <div className="d-flex justify-content-start mt-3   ">
              <button className="btn-custom btn-light btn-sm  mx-1">
                <img
                  src={google}
                  alt="Google logo"
                  style={{ width: "15px", marginRight: "8px" }}
                />
                Google
              </button>
              <button className="btn-custom btn-light btn-sm  mx-1">
                <img
                  src={microsoft}
                  alt="Google logo"
                  style={{ width: "15px", marginRight: "8px" }}
                />
                Microsoft
              </button>
              <button className="btn-custom btn-light btn-sm  mx-0">
                <div className="circle2"></div>
                {"  "} HRTool <br />
                Username
              </button>
            </div>
          </form>
        </div>

        <div className="col-12 col-md-6 right-col pt-5 ps-5">
          <div className="row ms-5">
            <img
              src={personswithgraph}
              alt="persong image"
              style={{ width: "100%" , height:"100%"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
