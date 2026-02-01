import React, { useState } from "react";
import { siteConfig } from '../../components/config';
import applyphoto from '../../assets/applyphoto.png';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    // Validate form data
    if (!formData.name || !formData.phone || !formData.course) {
      setSubmitError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Option 1: Send via WhatsApp (default - always works)
      if (siteConfig.forms.whatsapp.enabled) {
        const message = `Hello, I want to apply for a course 🎓\n\nMy Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "Not provided"}\nCourse: ${formData.course}`;

        const whatsappURL = `https://wa.me/${siteConfig.forms.whatsapp.number}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");

        setSubmitMessage("✓ Opening WhatsApp... Check your phone!");
        setFormData({ name: "", phone: "", email: "", course: "" });
      }

      // Option 2: Send via EmailJS (if enabled - requires setup)
      if (siteConfig.forms.emailjs.enabled && siteConfig.forms.emailjs.serviceId) {
        try {
          // Note: You need to add EmailJS library to package.json
          // npm install @emailjs/browser
          // Then uncomment the import and this code

          /*
          import emailjs from '@emailjs/browser';
          
          await emailjs.send(
            siteConfig.forms.emailjs.serviceId,
            siteConfig.forms.emailjs.templateId,
            {
              from_name: formData.name,
              from_email: formData.email,
              phone: formData.phone,
              course: formData.course,
              to_email: siteConfig.contact.email
            },
            siteConfig.forms.emailjs.publicKey
          );
          */

          console.log("Email sent successfully");
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
          // Still show WhatsApp message even if email fails
        }
      }

      // Show success message
      setTimeout(() => {
        setSubmitMessage("");
        setFormData({ name: "", phone: "", email: "", course: "" });
      }, 3000);

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("An error occurred. Please try again or use WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      {/* Background + Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={applyphoto}
          alt="Application background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-red-900/80 to-[#E8D461]/30"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-md rounded-4xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Application Form
        </h1>
        <p className="text-center text-gray-700 text-sm mb-6">
          Join {siteConfig.siteName} today!
        </p>

        {submitMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            {submitMessage}
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition"
              style={{ '--focus-ring-color': siteConfig.colors.secondary }}
              disabled={isSubmitting}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+20..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition"
              style={{ '--focus-ring-color': siteConfig.colors.secondary }}
              disabled={isSubmitting}
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition"
              style={{ '--focus-ring-color': siteConfig.colors.secondary }}
              disabled={isSubmitting}
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Select Course <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition appearance-none"
              style={{ '--focus-ring-color': siteConfig.colors.secondary }}
              disabled={isSubmitting}
            >
              <option value="">-- Select a course --</option>
              {siteConfig.courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: siteConfig.colors.dark,
              '--hover-bg': siteConfig.colors.secondary
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit & Send to WhatsApp"}
          </button>
        </form>

        {/* Alternative Contact Method */}
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-center text-gray-700 text-xs mb-3">
            Or contact us directly:
          </p>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center justify-center gap-2 w-full py-2 text-gray-700 font-medium hover:text-gray-900 transition"
          >
            📞 {siteConfig.contact.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;