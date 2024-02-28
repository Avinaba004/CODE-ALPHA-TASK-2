import React from "react";

function SocialCard({ data }) {
  return (
    <div className="social--card">
      <div className="username--wrapper">
        <img src={data.socialImg} alt="facebook" />
        <span><a href="https://www.facebook.com/profile.php?id=100086460743480&mibextid=uzlsIk">{data.userName}</a></span>
      </div>
      <h2>{data.Followers}</h2>
      <p>{data.text ? data.text : "Followers"}</p>
      <span className="today">
        <img src={data.arrowImg} alt="" /> {data.NoFollow} Today
      </span>
    </div>
  );
}

export default SocialCard;
