import React from "react";
import img from "../Assets/Img/cover.jpeg";
import "../Assets/Css/loggedin.css";
const Loggedin = () => {
  return (
    <div className="margin">
      <div className="size">
        <p className="title">Welcome to Puppy Love</p>
        <p>The modern and better avatar of Programming Club's puppy-love.</p>
        <p>
          Puppy Love is a platform for shy people to reach out anonymously to
          their crush. They can sign up and mark up to 4 of their crushes. On
          Valentine's day, the platform will match them anonymously, and will
          inform them if both of them like each other.
        </p>
        <p>
          Used in IIT Kanpur from 7th to 14th February, 2017, witnessing 1800+
          registrants.
        </p>
      </div>
      <div>
        <img src={img} alt="img" className="center" />
      </div>
      <div>
        <p className="size">
          Algorithm designed from the ground up, with a completely secure
          computation model which guarantees the following:
        </p>
        <ul className="size">
          <li>
            The identities of your choices are never, ever, exposed in plain
            text. Not even at the server. The server, even while matching
            couples, can not know what the choices were.
          </li>
          <li>
            The other person will only know whether you liked him/her or not if
            that person liked you as well. The server will know whether you
            matched with some person or not, but no more.
          </li>
          <li>
            The above guarantees are independent of the code running on the
            server, and can be verified on the browser.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Loggedin;
