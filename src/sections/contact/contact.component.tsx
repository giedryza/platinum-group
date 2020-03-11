import React, { useState } from 'react';
import Title from '../../components/title/title.component';
import ButtonFlat from '../../components/button-flat/button-flat.component';

const DEFAULT_STATE = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [values, setValues] = useState(DEFAULT_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="container">
        <Title titleUp="contact us" />
        <form action="POST" className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__input-group">
            <input
              name="name"
              type="text"
              className="contact__input"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact__input-group">
            <input
              name="email"
              type="text"
              className="contact__input"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="contact__input-group">
            <input
              name="message"
              type="text"
              className="contact__input"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div className="contact__submit-group">
            <ButtonFlat label="Send message" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
