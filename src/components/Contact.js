import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // Track submission status

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto needs-validation"
          style={{ maxWidth: '500px' }}
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              aria-label="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here"
              aria-label="Write your message here"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send
          </button>
        </form>
        {status === 'success' && (
          <div className="alert alert-success mt-3" role="alert">
            Thank you for getting in touch! I’ll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="alert alert-danger mt-3" role="alert">
            Please fill in all the fields before submitting.
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
