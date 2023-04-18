import React, { useState } from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnqylqln");

  const initInputs = {
    name: "",
    email: "",
    message: ""
  };

  const [inputs, setInputs] = useState(initInputs);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault(); // prevent default form submit behavior
    handleSubmit(inputs); // submit the form with the current inputs
  }
  
  return (
    <div className="contact--container" id="contact">
      <h2>Contact Me</h2>
      {state.succeeded ? (
        <p>Thanks for contacting me!</p>
      ) : (
        <form className="contact--form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="name"
            value={inputs.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="email"
            value={inputs.email}
          />
          <textarea
            name="message"
            placeholder="Your message here"
            style={{ resize: "none" }}
            onChange={handleChange}
            value={inputs.message}
          />
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
