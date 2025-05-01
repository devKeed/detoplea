import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { InputField, CheckboxField, TextAreaField, SelectField } from "../components/reusables/ContactComponents";



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
        setConversion(1500); // fallback
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
    return `${currencySymbols[currency]}${formatNumber(value)} - ${currencySymbols[currency]}${formatNumber(next)}`;
  });

  const hearAboutUsOptions = [
    { label: "Select an option", value: "" },
    { label: "Google", value: "google" },
    { label: "Instagram", value: "instagram" },
    { label: "Twitter", value: "twitter" },
    { label: "Facebook", value: "facebook" },
  ];

  return (
    <div className="py-5 sm:py-16 lg:py-20">
      <div className="my-5 sm:my-20 lg:my-44">
        <h3 className="uppercase text-[#EE8029] text-center font-medium">
          Client Application Form
        </h3>
        <p className="text-center font-normal mt-5 mb-5 px-3 text-sm sm:px-12 lg:px-60">
          Ready to elevate your brand and accelerate your growth? Start by
          filling out our application. Once we review your details, we'll
          schedule a complimentary call to discuss your goals, share strategic
          insights, and see if we're the right fit. Because we tailor our
          approach to deliver maximum impact, we selectively partner with
          businesses ready to scale.
        </p>

        <div className="pt-5 px-6 sm:px-12 lg:px-16 flex flex-col gap-5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col sm:flex-row w-full gap-7">
              <InputField label="First Name" placeholder="First Name" />
              <InputField label="Last Name" placeholder="Last Name" />
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-7">
              <InputField label="Email" placeholder="Email" />
              <InputField label="Phone Number" placeholder="Phone Number" />
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-7">
              <InputField label="Company Name" placeholder="Company Name" />
              <InputField
                label="Website/Social Media"
                placeholder="Website/Social Media"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col pt-5 sm:pt-16">
            <p className="">What service(s) are you interested in?</p>
            {services.map((service) => (
              <CheckboxField key={service} label={service} id={service} />
            ))}
          </div>

          {/* Goals Section */}
          <TextAreaField
            label="Please tell us more about your goals:"
            placeholder="Please be specific about what you're looking for, what you've previously tried, and if you have particular goals in mind."
          />

          {/* Budget Section */}
          <div className="flex flex-col pt-8">
            <div className="flex items-center gap-3">
              <p className="">What is your monthly budget?</p>
              <div className="relative ">
                <button
                  type="button"
                  className="flex items-center px-2 py-1 rounded-md text-xs bg-white"
                  onClick={() => setDropdownOpen((v) => !v)}
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
            {budgets.map((budget, index) => (
              <CheckboxField
                key={budget}
                label={budget}
                id={`Price${index + 1}`}
              />
            ))}
          </div>

          {/* Start Time Section */}
          <TextAreaField
            label="If this is a good fit, how soon can you get started?"
            placeholder=""
            height="150px"
          />

          {/* How did you hear about us? */}
          <SelectField
            label="How did you hear about Detoplea Marketing?"
            options={hearAboutUsOptions}
          />

          {/* Submit Button */}
          <div className="flex justify-end pt-5">
            <button className="bg-[#F2720D] text-white flex items-center gap-2 px-5 py-3 rounded-2xl hover:bg-gray-500 hover:text-white transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
