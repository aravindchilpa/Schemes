import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const serviceID = 'service_6cncbb5';
    const templateID = 'template_pom8orh';
    const userID = '0UEKfvTO1zH_CNbTi';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((res) => {
        setFormData({ name: '', email: '', message: '' });
        alert('Your message sent successfully!!');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container section section__height" id="contactme">
      <form className="form" onSubmit={handleSubmit}>
      <h2 className="title">Contact us</h2>

        <input
          type="text"
          placeholder="Name"
          className="input"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Your message"
          className="input"
          name="message"
          value={message}
          onChange={handleChange}
          required
        />
        <button className="button" type="submit">
          Send
        </button>
        <div className="intouch">
          <a href="https://www.facebook.com/aravind.aru.7547" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          {/* Add other social media links here */}
        </div>
      </form>
    </div>
  );
}

export default Contact;
