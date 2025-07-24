// @ts-nocheck
import React from "react";

import "./FormStyles.css";
const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Your Name :</label>
        <input type="text"></input>
        <label htmlFor="email">E-mail :</label>
        <input type="email"></input>
        <label htmlFor="subject">Subject :</label>
        <input type="text"></input>
        <label htmlFor="message">Message :</label>
        <textarea
          name="message"
          id="message"
          row="6"
          placeholder="Your message type here"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
