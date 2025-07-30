import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  InputField,
  TextAreaField,
  CheckboxField,
  RadioField,
  SelectField,
} from "../components/reusables/ContactComponents";
import { Toast } from "../components/reusables/Toast";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const services = [
    "Brand Development",
    "Paid Ads",
    "Social Media Management",
    "E-mail Marketing",
    "Web design and development",
  ];

  const baseBudgets = [1000, 2000, 4000, 6000, 10000, 12000];

  const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
  const [conversion, setConversion] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "warning";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const showToast = (
    message: string,
    type: "success" | "error" | "warning"
  ) => {
    setToast({
      message,
      type,
      isVisible: true,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const scrollToError = () => {
    if (formRef.current) {
      const firstErrorField = formRef.current.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteSocial: "",
    selectedServices: {} as Record<string, boolean>,
    goals: "",
    selectedBudget: "",
    startTime: "",
    hearAboutUs: "",
  });

  const currencySymbols = { USD: "$", NGN: "₦" };

  const handleCurrencyChange = async (cur: "USD" | "NGN") => {
    setCurrency(cur);
    setDropdownOpen(false);
    if (cur === "NGN") {
      try {
        const res = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await res.json();
        setConversion(data.rates.NGN || 1);
      } catch {
        setConversion(1500);
      }
    } else {
      setConversion(1);
    }
  };

  const budgets = baseBudgets.slice(0, 5).map((usd, i) => {
    const value = currency === "USD" ? usd : Math.round(usd * conversion);
    const next =
      currency === "USD"
        ? baseBudgets[i + 1]
        : baseBudgets[i + 1] && Math.round(baseBudgets[i + 1] * conversion);

    const formatNumber = (num: number) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    if (!next) return `${currencySymbols[currency]}${formatNumber(value)}`;
    return `${currencySymbols[currency]}${formatNumber(value)} - ${
      currencySymbols[currency]
    }${formatNumber(next)}`;
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleServiceCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      selectedServices: {
        ...formData.selectedServices,
        [name]: checked,
      },
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) newErrors.phone = "Phone number is required";

    const hasSelectedService = Object.values(formData.selectedServices).some(
      (value) => value
    );
    if (!hasSelectedService) {
      newErrors.selectedServices = "Please select at least one service";
    }

    if (!formData.selectedBudget) {
      newErrors.selectedBudget = "Please select a budget range";
    }

    if (!formData.hearAboutUs) {
      newErrors.hearAboutUs = "Please let us know how you heard about us";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const errorCount = Object.keys(newErrors).length;
      const errorMessage =
        errorCount === 1
          ? "Please fix the error below"
          : `Please fix the ${errorCount} errors below`;

      showToast(errorMessage, "error");

      // Scroll to first error after a brief delay
      setTimeout(() => {
        scrollToError();
      }, 100);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const selectedServicesList = Object.entries(formData.selectedServices)
      .filter(([_, isSelected]) => isSelected)
      .map(([service]) => service)
      .join(", ");

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      websiteSocial: formData.websiteSocial,
      services: selectedServicesList,
      goals: formData.goals,
      budget: formData.selectedBudget,
      startTime: formData.startTime,
      hearAboutUs: formData.hearAboutUs,
    };

    // Check if EmailJS environment variables are configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS configuration missing. Please check your environment variables."
      );
      showToast(
        "Email service is not properly configured. Please contact support.",
        "error"
      );
      setLoading(false);
      return;
    }

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      showToast(
        "Thank you! Your message has been sent successfully. We'll be in touch soon.",
        "success"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        websiteSocial: "",
        selectedServices: {},
        goals: "",
        selectedBudget: "",
        startTime: "",
        hearAboutUs: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      showToast(
        "Sorry, there was an error sending your message. Please try again or contact us directly.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const hearAboutUsOptions = [
    { label: "Select an option", value: "" },
    { label: "Google", value: "google" },
    { label: "Instagram", value: "instagram" },
    { label: "Twitter", value: "twitter" },
    { label: "Facebook", value: "facebook" },
    { label: "Referral", value: "referral" },
    { label: "Other", value: "other" },
  ];

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <SEO
        title="Contact Us - Get Your Free Digital Marketing Consultation"
        description="Ready to grow your business? Contact Detoplea Marketing for a free consultation. Get expert advice on digital marketing, SEO, social media, and web design services tailored to your business needs."
        keywords="contact digital marketing agency, free marketing consultation, get quote, marketing services inquiry, business growth consultation, SEO consultation, web design quote"
        url="https://detoplea.com/contact"
        type="website"
      />
      <div className="py-5 sm:py-16 pt-20 md:pt-0 lg:py-10">
        <div className="my-5 sm:my-20 lg:my-20">
          <h3 className="uppercase text-[#EE8029] text-center font-medium">
            Client Application Form
          </h3>
          <p className="text-center font-normal mt-5 mb-5 px-3 text-sm sm:px-12 lg:px-50">
            Ready to elevate your brand and accelerate your growth? Start by
            filling out our application. Once we review your details, we'll
            schedule a complimentary call to discuss your goals, share strategic
            insights, and see if we're the right fit. Because we tailor our
            approach to deliver maximum impact, we selectively partner with
            businesses ready to scale.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="pt-5 px-6 sm:px-12 lg:px-16 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-7">
              <div className="flex flex-col sm:flex-row w-full gap-7">
                <InputField
                  label="First Name"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  required
                />
                <InputField
                  label="Last Name"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row w-full gap-7">
                <InputField
                  label="Email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  required
                />
                <InputField
                  label="Phone Number"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row w-full gap-7">
                <InputField
                  label="Company Name"
                  placeholder="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Website/Social Media"
                  placeholder="Website/Social Media"
                  name="websiteSocial"
                  value={formData.websiteSocial}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex flex-col pt-5 sm:pt-16">
              <p className="">
                What service(s) are you interested in?{" "}
                <span className="text-red-500">*</span>
              </p>
              {errors.selectedServices && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.selectedServices}
                </p>
              )}
              {services.map((service) => (
                <CheckboxField
                  key={service}
                  label={service}
                  id={service}
                  name={service}
                  checked={!!formData.selectedServices[service]}
                  onChange={handleServiceCheckboxChange}
                />
              ))}
            </div>

            <TextAreaField
              label="Please tell us more about your goals:"
              placeholder="Please be specific about what you're looking for, what you've previously tried, and if you have particular goals in mind."
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
            />

            <div className="flex flex-col pt-8">
              <div className="flex items-center gap-3">
                <p className="">
                  What is your monthly budget?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="relative ">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 rounded-md text-xs bg-white"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="text-[15px]">
                      Select your preferred currency:{" "}
                      {currency === "USD" ? "USD ($)" : "NGN (₦)"}
                    </span>
                    <FaChevronDown className="ml-1 text-xs" size={10} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-1 w-24 bg-gray-100 rounded-md border z-10">
                      <div
                        className="text-[15px] px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-t-md transition"
                        onClick={() => handleCurrencyChange("USD")}
                      >
                        Dollar ($)
                      </div>
                      <div
                        className="text-[15px] px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-b-md transition border-t"
                        onClick={() => handleCurrencyChange("NGN")}
                      >
                        Naira (₦)
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {errors.selectedBudget && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.selectedBudget}
                </p>
              )}
              {budgets.map((budget, index) => (
                <RadioField
                  key={budget}
                  label={budget}
                  id={`budget-${index}`}
                  name="budget"
                  value={budget}
                  checked={formData.selectedBudget === budget}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      selectedBudget: e.target.value,
                    });
                    if (errors.selectedBudget) {
                      setErrors({ ...errors, selectedBudget: "" });
                    }
                  }}
                />
              ))}
            </div>

            <TextAreaField
              label="If this is a good fit, how soon can you get started?"
              placeholder=""
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              height="150px"
            />

            <SelectField
              label="How did you hear about Detoplea Marketing?"
              options={hearAboutUsOptions}
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={(value) => handleSelectChange("hearAboutUs", value)}
              error={errors.hearAboutUs}
              required
            />

            <div className="flex justify-end pt-5">
              <button
                type="submit"
                className={`bg-[#F2720D] text-white flex items-center gap-2 px-10 py-3 rounded-2xl hover:bg-gray-500 hover:text-white transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
};
