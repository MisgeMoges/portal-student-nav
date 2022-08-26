import React from "react";
import { FaUser, FaInfoCircle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";

import { useGlobalContext } from "./context";

const Profile = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="info" onMouseOver={closeSubmenu}>
      <div className="info-center">
        <article className="info-container">
          <div>
            <h4>Quick links</h4>
            <ul className="info-links">
              <li>
                <a href="/Profile">
                  <FaInfoCircle className="info-icon" />
                  Basic Info
                </a>
              </li>
              <li>
                <ImProfile className="profile-icon" />
                <a href="/Profile">My Profile</a>
              </li>
              <li>
                <RiLockPasswordFill className="password-icon" />
                <a href="/Profile">Change password</a>
              </li>
              <li>
                <FaUser className="log-out-icon" />
                <a href="/Profile">log out</a>
              </li>
            </ul>
          </div>
        </article>
        <article className="detail">
          <h4>My Profile</h4>
          <div className="detail-info">
            <div className="detail-info-inner">
              <h5>Full Name</h5>
              <br />
              <br />
              <h5>ID</h5>
              <br />
              <br />
              <h5>Department</h5>
              <br />
              <br />
              <h5>Year</h5>
            </div>
            <div className="photo-container">
              <FaUser className="user-icon" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Profile;
