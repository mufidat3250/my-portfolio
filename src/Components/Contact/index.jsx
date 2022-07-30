import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="Contact" name="contact">
      <div className="contact__container">
        <div>
          <p className="contact">Contact</p>
          <p className="contact__description">
            Submit the form bellow or send an email to -{" "}
            <strong className="italic">wahabmufidat1919@gmail.com</strong>
          </p>
        </div>
        <form action="" className="space-y-4">
          <input type="text" className="input" placeholder="name" />
          <input type="text" className="input" placeholder="email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full"
          ></textarea>
          <button className="py-3 px-6 border-2 border-white font-bold hover:bg-pink-700 hover:border-pink-700">
            Let's Colaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
