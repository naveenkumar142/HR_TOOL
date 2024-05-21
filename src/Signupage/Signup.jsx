import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Client, Account, ID } from "appwrite";
import { account } from '../config/appwritetest';
import { useNavigate } from "react-router-dom";


import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";

const images = [
  { src: image1, opacity: 0.6 }, 
  { src: image2, opacity: "" },
  { src: image3, opacity: "" },
  { src: image4, opacity: 0.5 },
  { src: image5, opacity: 0.4 },
  { src: image6, opacity: "" },
  { src: image7, opacity: "" },
  { src: image8, opacity: 0.8 },
  { src: image9, opacity: 0.6 },
  { src: image10, opacity: 0.6 },
  { src: image11, opacity: "" },
  { src: image12, opacity: "" },
  { src: image13, opacity: 0.7 }
];







export default function Signup() {

  const [isSignUp, setIsSignUp] = useState({
    name: "",
    email: "",
    phonenumber: "",
    companyName:"",
    employees:""
  });

  const navigate = useNavigate();

  
  const handleLoginClick = () => {
    navigate('/signin');
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

// useEffect(() => {

//   const handleSignup = async() => {
//     const user  =  await account.create(
//       'ID.unique()', 
//       'email@example.com', 
//       'password'
//   );
//   console.log(user);
//   }
//    handleSignup();
// },[])

const handleSignUp = async (e) => {
  e.preventDefault();

  try {
    const signUpProcess = account.create(
      isSignUp.name,
      isSignUp.email,
      isSignUp.phonenumber,
      isSignUp.companyName,
      isSignUp.employees,

    );

    signUpProcess
      .then(function (response) {
        alert("SignUp successfully");
        // toast.success("SignUp successfully");
        // navigate("/log");
      })
      .catch(function (error) {
        // toast.error("An error occurred. Please try again later");
        alert(error.message || "An error occurred during sign up.");
      });
  } catch (error) {
    alert("An error occurred. Please try again later.");
    // toast.error("An error occurred. Please try again later");
    console.error(error);
  }
  console.log(account);
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
          <div className="start_free mt-5">START FOR FREE</div>
          <div className="new_account d-flex">
            Create new account
            <div className="circle1"></div>
          </div>
          <div className="a_login">
            Already have an account? <span className="login_here" onClick={handleLoginClick}>Login here</span>
          </div>
          <form className="mt-5">
            <div className="row mb-3">
              <div className="col-6 col-md-4 position-relative">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="First Name" 
                  name="firstName"
                  onChange={(e) =>
                    setIsSignUp({
                      ...isSignUp,
                      name: e.target.value,
                      phonenumber: e.target.value,

                    })
                  }
                />
                <FontAwesomeIcon icon={faUser} className="input-icon" />
              </div>
              <div className="col-6 col-md-4 position-relative">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Last Name" 
                  name="lastName"
                />
                <FontAwesomeIcon icon={faUser} className="input-icon" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-8 position-relative">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  name="email"
                  onChange={(e) =>
                    setIsSignUp({ ...isSignUp, email: e.target.value })
                  }
                />
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-8 position-relative">
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="Phone Number" 
                  name="phoneNumber"
                  onChange={(e) =>
                    setIsSignUp({
                      ...isSignUp,
                      phonenumber: e.target.value,
                    })
                  }
                />
                <FontAwesomeIcon icon={faPhone} className="input-icon" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-8 position-relative">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Company Name" 
                  name="companyName"
                  onChange={(e) =>
                    setIsSignUp({
                      ...isSignUp,
                      companyName: e.target.value,
                    })
                  }
                />
                <FontAwesomeIcon icon={faBuilding} className="input-icon" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-8 position-relative">
                <select 
                  className="form-select"
                  name="employees"
                  onChange={(e) =>
                    setIsSignUp({ ...isSignUp, employees: e.target.value })
                  }
                >
                  <option value="1">Number of employees</option>
                  <option value="1">1 Employee</option>
                  <option value="2">2 Employees</option>
                  <option value="3">3 Employees</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-8">
                <button type="submit" onClick={handleSignUp} className="submit w-100">Get Started</button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-12 col-md-6 right-col pt-3 ps-5">
          <div className="row ms-5">
            <div className="col-3 col-md-3 pt-5 mt-4">
              {images.slice(0, 4).map((img, index) => (
                <img src={img.src} alt={`img${index + 1}`} key={index} style={{ opacity: img.opacity }} />
              ))}
            </div>
            <div className="col-3 col-md-3 pd-5 mb-5">
              {images.slice(4, 9).map((img, index) => (
                <img src={img.src} alt={`img${index + 5}`} key={index} style={{ opacity: img.opacity }} />
              ))}
            </div>
            <div className="col-3 col-md-3 pt-5 mt-4">
              {images.slice(9, 13).map((img, index) => (
                <img src={img.src} alt={`img${index + 10}`} key={index} style={{ opacity: img.opacity }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


