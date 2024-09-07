import React from "react";
import { addContact } from "../services/api";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await addContact(formData);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const validateForm = () => {
    let tempErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.firstName)) {
      tempErrors.firstName = "First name can only contain letters and spaces";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.lastName)) {
      tempErrors.lastName = "Last name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9\-\+]{9,15}$/.test(formData.phone)) {
      tempErrors.phone =
        "Phone number format is invalid. It should be between 9 and 15 digits and may include '-' or '+'";
    }

    // Additional Info validation
    if (formData.additionalInfo.length > 5000) {
      tempErrors.additionalInfo =
        "Additional information must not exceed 5000 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold mb-4">
            Welcome to OpenAgent
          </h1>
          <p className="text-lg">
            We've been around since 2013, and our vision is to make it easy for
            people to buy, sell and own property.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Here are the different ways you can contact us
        </h2>
        <div className="divider"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Contact Us Details</h3>
            <p>
              <strong>Phone:</strong> 13 24 34
            </p>
            <p>
              <strong>Email:</strong> Support@openagent.com.au
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Postal Address</h3>
            <p>PO BOX 419, Alexandria NSW 1435</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Contact Centre Hours</h3>
            <p>Monday-Friday 8:30 - 5:00</p>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.firstName ? "input-error" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-error text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.lastName ? "input-error" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-error text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-error text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.phone ? "input-error" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-error text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Additional Info</span>
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className={`textarea textarea-bordered w-full h-24 ${
                  errors.additionalInfo && formData.additionalInfo.length > 5000
                    ? "textarea-error"
                    : ""
                }`}
              ></textarea>
              {errors.additionalInfo &&
                formData.additionalInfo.length > 5000 && (
                  <p className="text-error text-xs mt-1">
                    {errors.additionalInfo}
                  </p>
                )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
