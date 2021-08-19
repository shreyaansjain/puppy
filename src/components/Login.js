import React from "react";
import love from "../Assets/Img/background.png";
import "../Assets/Css/form.css";
const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${love})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="fit"
    >
      <div className="set">
        <div id="title">Puppy love</div>
        <form className="ui container form ui grid" action="/loggedin">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            // className="ui input"
          />
          <label htmlFor="roll no">Roll No</label>
          <input
            type="number"
            id="roll no"
            placeholder="Roll No"
            // className="ui input"
          />
          <label htmlFor="id">IITK Id</label>
          <input
            type="email"
            id="id"
            placeholder="IITK Id"
            // className="ui input"
          />
          <button className="ui submit" type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
