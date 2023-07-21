import React, { useRef, useState } from "react";
import "./contact.css";
import HeaderSocials from "../home/HeaderSocials";
import { ContactData } from "../data/Data";

const Contact = () => {
  const formRef = useRef(null);
  const [isMessageVisible, setMessageVisibility] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    formRef.current.submit(); // Submit the form
    formRef.current.reset();
    // Show the success message after 3 seconds
    setTimeout(() => {
      setMessageVisibility(true);
      // Hide the success message after another 3 seconds
      setTimeout(() => setMessageVisibility(false), 3000);
    }, 3000);
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">{ContactData.title}</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">{ContactData.subtitle}</h3>
          <p className="contact__details">{ContactData.details}</p>
          <HeaderSocials />
        </div>

        <form
          ref={formRef}
          action="https://formsubmit.co/11c3278d5c9688ecb38d5d5bb52d8bef"
          method="POST"
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="text"
                id=""
                placeholder={ContactData.namePlaceholder}
                className="contact__form-input"
                required
                autoComplete="off"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                id=""
                placeholder={ContactData.emailPlaceholder}
                className="contact__form-input"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="text"
              id=""
              placeholder={ContactData.subjectPlaceholder}
              className="contact__form-input"
              required
              autoComplete="off"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder={ContactData.textPlaceholder}
              required
              autoComplete="off"
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://vrajsoni98.github.io/vraj-portfolio/"
          />
          <button type="submit" className="btn">
            {ContactData.button}
          </button>
          {isMessageVisible && (
            <p className="success-message">{ContactData.successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
