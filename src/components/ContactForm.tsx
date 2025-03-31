import Header from "../components/shared/Header";
import { useState, ChangeEvent, FormEvent } from "react";
import { IFormData, IFormErrors } from "../pages/contact";

export const ContactForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    let newErrors: IFormErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.comments.trim()) newErrors.comments = "Comments are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/your_form_id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comments: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Header />
      <div className="max-w-lg w-full py-24">
        <p className="text-4xl font-bold text-center mb-4">Contact Us</p>
        <p className="text-center text-lg text-gray-600 mb-6">
          Interested in partnering, have a media enquiry, or want to give
          feedback? Contact us using the form below.
        </p>
        {isSubmitted ? (
          <p className="text-green-600 text-center">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "firstName", label: "First Name", type: "text" },
              { name: "lastName", label: "Last Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label className="block font-medium text-lg text-black">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name as keyof IFormData]}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors[name as keyof IFormErrors] && (
                  <p className="text-red-600 text-sm">
                    {errors[name as keyof IFormErrors]}
                  </p>
                )}
              </div>
            ))}
            <div>
              <label className="block font-medium text-lg text-black">
                Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-3 border rounded-2xl bg-gray-100 text-gray-700 h-32 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.comments && (
                <p className="text-red-600 text-sm">{errors.comments}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-lg rounded-full hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
