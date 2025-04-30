import React from "react";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <h1>Account Settings</h1>
      </div>
      <div className="profile-content">
        <div>
          <img src="/assets/demo.png" id="profile-image" />
          <img src="/assets/camera.png" id="camera" />
        </div>
        <div>
          <h2>Marry Doe</h2>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default Profile;