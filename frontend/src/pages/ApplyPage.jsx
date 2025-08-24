import React, { useState } from "react";
import emailjs from "emailjs-com";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.SERVICE_KEY, // 👉 from EmailJS
        import.meta.env.TEMPLATE_KEY, // 👉 from EmailJS
        {
          job_title: formData.jobTitle,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          cover_letter: formData.coverLetter,
        },
        import.meta.env.EMAIL_JS_PUBLIC_KEY // 👉 from EmailJS
      )
      .then(
        () => {
          setSubmitted(true);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Apply Now</h1>

      {submitted ? (
        <div className="p-6 bg-green-100 border border-green-400 text-green-700 rounded-xl">
          ✅ Application submitted successfully! <br />
          We’ll get back to you at {formData.email}.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
          {/* Job Title */}
          <div>
            <label className="block font-medium">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g., Front Desk Executive"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block font-medium">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Write a short cover letter..."
              className="w-full border rounded-lg px-3 py-2 h-32"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dull"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplyPage;
