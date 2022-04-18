import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blog-ans">
      <div className="blog-box">
        <h2> 1.Difference between Authorization vs Authentication</h2>
        <p>
          The basic difference between Authentication and authorization is that
          authentication is the process of verifying a user whereas
          Authorization is the process of verifying specific applications,
          files, and data of a user has access to.Before the authorization
          process authentication is done.
        </p>
      </div>
      <div className="blog-box">
        <h2>
          2. Why are you using Firebase?What other methods do you have to
          implement Authentication?
        </h2>
        <p>
          I am using firebase for web authentication purpose like google
          ,email-pass,facebook etc social media login. The list of some common
          authentication methods used to secure modern systems are-
          Password-based authentication. Passwords are the most common methods
          of authentication. Password-based authentication. Passwords are the
          most common methods of authentication. Certificate-based
          authentication. Biometric authentication. Token-based authentication.
        </p>
      </div>
      <div className="blog-box">
        <h2>
          3.What other services does firebase provide other than Authentication?
        </h2>
        <p>
          The other services that Firebase provides other than Authentication,
          Most useful of them are- Cloud Firestore. Cloud Functions. Hosting
          Cloud Storage. Google Analytics. Predictions. Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
