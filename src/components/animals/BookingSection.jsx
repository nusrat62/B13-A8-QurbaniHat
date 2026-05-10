"use client";

import BookingForm from "./BookingForm";
import { toast } from "sonner";

const BookingSection = () => {
  const handleBookingSuccess = () => {
    toast.success("Booking request submitted successfully!", {
      description: "We'll contact you soon to confirm your booking.",
      duration: 5000,
    });
  };

  return (
    <div className="bg-surface border-2 border-border rounded-xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-heading">
        Place Your Booking
      </h2>
      <BookingForm onSuccess={handleBookingSuccess} />
    </div>
  );
};

export default BookingSection;
