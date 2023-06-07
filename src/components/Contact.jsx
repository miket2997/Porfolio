import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
    event.preventDefault(); 
    handleSubmit(inputs); // submit the form with the current inputs
  };

  function handleDownload() {
    const resumeUrl = "https://drive.google.com/file/d/1ZJM9sZJflJ8chYjZ2K8z64_T1BdBtwrw/view?usp=sharing"; 
    window.open(resumeUrl, "_blank");
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
          <button style={{background: "none", color: "black", fontWeight: "bold"}} type="button" onClick={ handleDownload }>
            Download Resume
            <br />
            <FontAwesomeIcon icon={ faDownload } size="2x" />
          </button>
        </form>
      )}
    </div>
  );
}
