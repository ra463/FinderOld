import React from "react";
// import { Link } from "react-router-dom";
import Header from "../Layout/Header/Header";
import { IoPerson } from "react-icons/io5";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="container">
          <div className="image">
            <img
              src="https://media.istockphoto.com/id/1229712361/vector/missing-person-rubber-stamp-red-missing-person-rubber-grunge-stamp-seal-vector-illustration.jpg?s=612x612&w=0&k=20&c=oftRKEhTGICwsx1c6uvMzYdl8W5cqiW2h-VgaGK7WY4="
              alt=""
            />
          </div>
          <div className="text">
            <h2>Find your Loving One's and report the missing Person.</h2>
            <p>
              This portol is open 24 hour's. You can submit your report anytime.
            </p>
            <a href="#box">
              <button>
                <IoPerson /> Get Started
              </button>
            </a>
          </div>
        </div>
        <div className="container2" id="box">
          <h2>How This Works ?</h2>
          <div className="cards">
            <div className="card">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/745/137/non_2x/create-account-illustration-vector.jpg"
                alt=""
              />
              <h3>Create an Account</h3>
              <p>
                You have to create an account in order to continue with this
                website.
              </p>
              <a href="/signup">SignUp</a>
            </div>
            <div className="card">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/search-error-5523268-4609439.png"
                alt=""
              />
              <h3>Report</h3>
              <p>
                You can submit report of missing person and you can also submit
                a report of found person.
              </p>
            </div>
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/push-notifications-concept-illustration_114360-4986.jpg?w=2000"
                alt=""
              />
              <h3>Notified</h3>
              <p>
                Once your report is submitted you will be notified by email and
                we will keep you updated about your missing or found report.
              </p>
            </div>
          </div>
        </div>
        <div className="container3">
          <h2>Know About Us ?</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
