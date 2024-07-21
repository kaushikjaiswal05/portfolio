import React, { useState } from "react";
import "./contact.css";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from '@mui/lab';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://portfolio-backend-kc2v.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="contact">
      <h1>contact me.</h1>
      <p>you can reach me through the following links.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="name*"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            autoComplete="name"
          />
          <input
            type="text"
            placeholder="phone*"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            autoComplete="phone"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="subject*"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            id="subject"
            autoComplete="subject"
          />
          <input
            type="email"
            placeholder="email*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            autoComplete="email"
          />
        </div>
        <textarea
          placeholder="message*"
          rows="5"
          cols="30"
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="message"
          autoComplete="message"
        />
        <LoadingButton
          type="submit"
          loading={loading}
          loadingPosition="start"
          startIcon={
            <SendIcon style={{ marginRight: "5px", fontSize: "0.8rem" }} />
          }
          variant="contained"
        >
          Send Message
        </LoadingButton>
      </form>
    </div>
  );
}

export default Contact;
