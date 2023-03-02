import React, { useState } from "react";
import "./UserProfile.scss";
import { AiFillSetting, AiOutlineBell } from "react-icons/ai";
import { BsCamera, BsKey } from "react-icons/bs";
import {
  MdCallMade,
  MdNotifications,
  MdOutlineDashboard,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";
import { CgSearchFound, CgNotes } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiEdit2, FiLogOut } from "react-icons/fi";
import ReportMenu from "./ReportMenu";

const UserProfile = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(0);
  const [dispaly, setDisplay] = useState(0);
  return (
    <>
      <div className="p">
        <div className="sidebar">
          <div className="upper">Finder</div>
          <div className="lower">
          <div
            onClick={() => setDisplay(1)}
            className={dispaly === 1 ? "active" : ""}
            >
              <CgNotes /> Submit Report
            </div>
            <div
              onClick={() => setDisplay(0)}
              className={dispaly === 0 ? "active" : ""}
            >
              <MdOutlineDashboard /> Dashboard
            </div>
            <div
              // onClick={() => setDisplay(1)}
              // className={dispaly === 1 ? "active" : ""}
            >
              <MdOutlineReportGmailerrorred /> Report Missing Person
            </div>
            <div>
              <CgSearchFound /> Founded Missing Person
            </div>
            <div>
              <MdCallMade /> All Reports
            </div>
            <div>
              <MdNotifications /> Notifications
            </div>
          </div>
        </div>
        <div className="p_top scroll1">
          <div className="p_head">
            <div className="p_head_left">Rachit's Profile</div>
            <div className="user_profile_head">
              <div className="svg">
                <AiOutlineBell />
              </div>
              <div onClick={() => setShow((prev) => !prev)}>
                <img src="/profile.png" alt="" />
                <p style={{ color: "green" }}>Rachit Patel</p>
                <RiArrowDownSLine />
              </div>
              {show && (
                <>
                  <div className="dropdown">
                    <FiLogOut style={{ fontSize: "1.2rem" }} />
                    <span>Logout</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="back"></div>
          {dispaly === 0 && (
            <div className="more_details">
              <div className="more_d">
                <div className="more_p">
                  <img src="/profile.png" alt="" />
                  <h3>Rachit Patel</h3>
                  <p style={{ color: "lightslategray" }}>User</p>
                  <div className="more_i">
                    <div>
                      <p>Edit Profile</p>
                      <FiEdit2 />
                    </div>
                    <div>
                      <p>Edit Password</p>
                      <BsKey />
                    </div>
                    <div>
                      <p>Edit Avatar</p>
                      <BsCamera />
                    </div>
                    <div>
                      <p>Setting</p>
                      <AiFillSetting />
                    </div>
                  </div>
                  <div className="more">
                    <div>
                      <p style={{ color: "red" }}>Report Missing Person</p>
                    </div>
                    <div>
                      <p style={{ color: "green" }}>Found Missing Person</p>
                    </div>
                  </div>
                </div>
                <div className="details">
                  {visible === 0 && (
                    <>
                      <div className="d_head">
                        <p className="active">Account Details</p>
                        <p onClick={() => setVisible(1)}>More Details</p>
                        <p>Settings</p>
                      </div>
                      <div className="d_body">
                        <div className="details_p">
                          <p className="small">First Name</p>
                          <div>
                            <p>Rachit</p>
                          </div>
                          <p className="small">Phone Number</p>
                          <div>
                            <p>19000-67845</p>
                          </div>
                          <p className="small">Gender</p>
                          <div>
                            <p>Male</p>
                          </div>
                          <p className="small">City</p>
                          <div>
                            <p>Jabalpur</p>
                          </div>
                          <p className="small">Pin Code</p>
                          <div>
                            <p>482004</p>
                          </div>
                        </div>
                        <div className="details_p">
                          <p className="small">Last Name</p>
                          <div>
                            <p>Patel</p>
                          </div>
                          <p className="small">Email Address</p>
                          <div>
                            <p>rachit@gmail.com</p>
                          </div>
                          <p className="small">Date of Birth</p>
                          <div>
                            <p>18 March 2002</p>
                          </div>
                          <p className="small">State</p>
                          <div>
                            <p>Madhya Pradesh</p>
                          </div>
                          <p className="small">Country</p>
                          <div>
                            <p>India</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {visible === 1 && (
                    <>
                      <div className="d_head">
                        <p onClick={() => setVisible(0)}>Account Details</p>
                        <p className="active">More Details</p>
                        <p>Settings</p>
                      </div>
                      <div className="d_body">
                        <div className="details_p">
                          <p className="small">Your Address</p>
                          <div>
                            <p>H.no 608, Pragti vihar, Suhagi, Adhartal</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {dispaly === 1 && <ReportMenu setDisplay={setDisplay} />}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
