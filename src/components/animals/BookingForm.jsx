"use client";

import { useState } from "react";
import { MapPin, User, Phone, Mail, MessageSquare } from "lucide-react";

const BookingForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear form inputs on submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
    // Call success callback if provided
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <User className="w-4 h-4 text-accent" />
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="w-full px-4 py-3 text-sm sm:text-base font-body bg-background border-2 border-border rounded-lg text-body placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <Mail className="w-4 h-4 text-accent" />
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email address"
          className="w-full px-4 py-3 text-sm sm:text-base font-body
                     bg-background border-2 border-border rounded-lg
                     text-body placeholder:text-muted
                     focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20
                     transition-all duration-200"
        />
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <Phone className="w-4 h-4 text-accent" />
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 text-sm sm:text-base font-body
                     bg-background border-2 border-border rounded-lg
                     text-body placeholder:text-muted
                     focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20
                     transition-all duration-200"
        />
      </div>

      {/* Address Field */}
      <div className="space-y-2">
        <label
          htmlFor="address"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <MapPin className="w-4 h-4 text-accent" />
          Delivery Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows={3}
          placeholder="Enter your complete delivery address"
          className="w-full px-4 py-3 text-sm sm:text-base font-body
                     bg-background border-2 border-border rounded-lg
                     text-body placeholder:text-muted resize-none
                     focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20
                     transition-all duration-200"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="flex items-center gap-2 text-sm sm:text-base font-medium text-body font-body"
        >
          <MessageSquare className="w-4 h-4 text-accent" />
          Additional Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Any special requirements or questions?"
          className="w-full px-4 py-3 text-sm sm:text-base font-body
                     bg-background border-2 border-border rounded-lg
                     text-body placeholder:text-muted resize-none
                     focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20
                     transition-all duration-200"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3.5 sm:py-4 text-sm sm:text-base
                   bg-gradient-accent text-primary rounded-lg font-bold font-body
                   shadow-md hover:shadow-xl
                   hover:brightness-110 hover:saturate-125
                   hover:-translate-y-0.5 hover:scale-[1.02]
                   transition-all duration-200 active:scale-95"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
