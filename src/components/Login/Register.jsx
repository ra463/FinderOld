import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.scss";
// import { register } from "../../redux/actions/userActions";

const Register = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [byear, setByear] = useState(new Date().getFullYear());
  //   const [bmonth, setBmonth] = useState(new Date().getMonth() + 1);
  //   const [bday, setBday] = useState(new Date().getDate());

  //   const TempYear = new Date().getFullYear();
  //   const years = Array.from(new Array(100), (val, index) => TempYear - index);
  //   const month = Array.from(new Array(12), (val, index) => index + 1);
  //   const getdate = () => {
  //     return new Date(byear, bmonth, 0).getDate();
  //   };
  //   const date = Array.from(new Array(getdate()), (val, index) => index + 1);
  const genderValue = ["Specify Gender", "Male", "Female", "Custom"];

  //   const dispatch = useDispatch();

  //   const loginHandler = (e) => {
  //     e.preventDefault();
  //     dispatch(
  //       register(
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //         gender,
  //         byear,
  //         bmonth,
  //         bday
  //       )
  //     );
  //   };
  return (
    <div className="login-div">
      <div className="login scroll">
        <form className="loginform">
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Register Here!
          </h2>
          <p className="head">Fill the all details to setup your account.</p>
          <p className="email">First Name</p>
          <input
            type="text"
            placeholder="Your First Name"
            required
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          />
          <p className="email">Last Name</p>
          <input
            type="text"
            placeholder="Your Last Name"
            required
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
          />
          <p className="email">Email</p>
          <input
            type="email"
            placeholder="yourmail@example.com"
            required
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <p className="email">Password</p>
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p className="email">Address</p>
          <input
            type="text"
            placeholder="Enter your resdential address"
            required
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="address">
            <div className="year">
              <p className="email">State</p>
              <input
                type="text"
                placeholder="Enter your State"
                required
                className="add-input"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="year">
              <p className="email">City</p>
              <input
                type="text"
                placeholder="Enter your City"
                required
                className="add-input"

                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="year">
              <p className="email">PinCode</p>
              <input
                type="text"
                placeholder="Your area pincode"
                required
                className="add-input"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="dob">
            <p className="email">Date of Birth</p>
            <div className="dob-input">
              <div className="year">
                <p className="email">Year</p>
                <select
                  name="byear"
                  id="byear"
                  //   value={byear}
                  //   onChange={(e) => setByear(e.target.value)}
                >
                  {/* {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))} */}
                </select>
              </div>
              <div className="year">
                <p className="email">Month</p>
                <select
                  name="bmonth"
                  id="bmonth"
                  //   value={bmonth}
                  //   onChange={(e) => setBmonth(e.target.value)}
                >
                  {/* {month.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))} */}
                </select>
              </div>
              <div className="year">
                <p className="email">Date</p>
                <select
                  name="bday"
                  id="bday"
                  //   value={bday}
                  //   onChange={(e) => setBday(e.target.value)}
                >
                  {/* {date.map((dates, index) => (
                    <option key={index} value={dates}>
                      {dates}
                    </option>
                  ))} */}
                </select>
              </div>
            </div>
          </div>
          <div className="gender">
            <p className="email">Gender</p>
            <div className="gender_input">
              <select
                name="gender"
                id="gender"
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
              >
                {genderValue.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button style={{ marginTop: "1.5rem" }} type="submit">
            Sign Up
          </button>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.85rem",
              paddingBottom: "1rem",
            }}
            to="/login"
            className="password"
          >
            <p>Go back to Login</p>
          </Link>
        </form>
      </div>
      <div className="background">
        <div>
          <img src="/login.png" alt="login" />
          <img src="/auth.png" alt="auth" />
        </div>
        <div>
          <p className="head-1">Register Yourself</p>
          {/* <p className="head-2">Register here to explore the world!</p> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
