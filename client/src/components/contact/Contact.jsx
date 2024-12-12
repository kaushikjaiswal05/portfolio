import React, { useState } from "react";
import "./contact.css";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from '@mui/lab';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://portfolio-backend-kc2v.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (result.success) {
        setSnackbar({
          open: true,
          message: "Form submitted successfully!",
          severity: "success",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSnackbar({
          open: true,
          message: "Failed to submit your request. Please try again.",
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error to submit your request. Please try again.",
        severity: "error",
      });
    }
    setLoading(false);
  };

  return (
    <div className="contact">
      <h1>Contact me.</h1>
      <p>You can reach me by filling the form below.</p>
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
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Contact;
