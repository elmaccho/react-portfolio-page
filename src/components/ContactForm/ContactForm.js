import React, { useEffect, useState } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (formData.firstName.trim() === "") {
      errors.firstName = "Pole Imię jest wymagane";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      errors.lastName = "Pole Nazwisko jest wymagane";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      errors.email = "Pole E-mail jest wymagane";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Podaj poprawny adres e-mail";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      errors.message = "Pole Wiadomość jest wymagane";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formularz poprawny, można wysłać");
      setIsFormSubmitted(true);
      setIsAnimationCompleted(false);

      // Wysłanie formularza...

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
      setFormErrors({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    } else {
      console.log("Formularz zawiera błędy");
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (isFormSubmitted) {
      setIsSuccessMessageVisible(true);
      setIsAnimationCompleted(false);

      const timeout = setTimeout(() => {
        setIsAnimationCompleted(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isFormSubmitted]);

  const handleAnimationEnd = () => {
    if (isFormSubmitted && isAnimationCompleted) {
      setIsFormSubmitted(false);
    }
  };

  const inputStyle = {
    display: "none"
  };

  return (
    <div id="Contact" className="ContactForm-container" data-Aos="fade-up">
      <h1 className="ContactForm-title">Kontakt</h1>
      <form action="https://formsubmit.co/maciek.chojnacki22@wp.pl" method="POST" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            placeholder="Imię"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={formErrors.firstName ? "errorInput" : ""}
          />

          <input
            type="text"
            placeholder="Nazwisko"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={formErrors.lastName ? "errorInput" : ""}
          />
        </span>

        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? "errorInput" : ""}
        />

        <textarea
          placeholder="Wiadomość..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={formErrors.message ? "errorInput" : ""}
        ></textarea>

        <input type="submit" value="Prześlij" />


        <input type="text" name="_honey" style={inputStyle} />
      </form>

      {isSuccessMessageVisible && (
        <div
          className={`successMessage ${
            isAnimationCompleted ? "slide-out-right" : ""
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          Formularz został wysłany poprawnie!
        </div>
      )}

      <div className="blobContact">
        <li></li>
        <li></li>
      </div>
    </div>
  );
}

export default ContactForm;
