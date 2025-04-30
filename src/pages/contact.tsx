const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col w-full">
    <p>{label}</p>
    <input
      type="text"
      placeholder={placeholder}
      className="border p-3 w-full text-sm"
    />
  </div>
);

const TextAreaField = ({
  label,
  placeholder,
  height = "250px",
}: { label: string; placeholder: string; height?: string }) => (
  <div className="flex flex-col my-5">
    <p>{label}</p>
    <textarea
      placeholder={placeholder}
      className="border p-4 w-full text-sm"
      style={{ height }}
    ></textarea>
  </div>
);

const CheckboxField = ({ label, id }: { label: string; id: string }) => (
  <div className="flex flex-row items-center gap-3 pt-5 text-xxs">
    <input
      type="checkbox"
      id={id}
      className="w-3 h-3" // smaller checkbox
    />
    <label htmlFor={id}>{label}</label>
  </div>
);



const SelectField = ({ label, options }: { label: string; options: { label: string; value: string }[] }) => (
  <div className="flex flex-col mt-5">
    <p>{label}</p>
    <select className="border p-3 w-full text-sm">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
         <p className="text-xs">  {option.label}</p>
        </option>
      ))}
    </select>
  </div>
);


export const Contact = () => {
  const services = [
    "Brand Development",
    "Paid Ads",
    "Social Media Management",
    "E-mail Marketing",
    "Web design and development",
  ];

  const budgets = [
    "$1000 - $2000",
    "$2000 - $4000",
    "$4000 - $6000",
    "$6000 - $10000",
    "$10000 - $12000",
  ];

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
          Ready to elevate your brand and accelerate your growth? Start by filling out our application. 
          Once we review your details, we'll schedule a complimentary call to discuss your goals, 
          share strategic insights, and see if we're the right fit. Because we tailor our approach 
          to deliver maximum impact, we selectively partner with businesses ready to scale.
        </p>

        <div className="pt-5 px-6 sm:px-12 lg:px-16 flex flex-col gap-5">
          {/* Basic Info Section */}
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
              <InputField label="Website/Social Media" placeholder="Website/Social Media" />
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
            <p className="">What is your monthly budget?</p>
            {budgets.map((budget, index) => (
              <CheckboxField key={budget} label={budget} id={`Price${index + 1}`} />
            ))}
          </div>

          {/* Start Time Section */}
          <TextAreaField
            label="If this is a good fit, how soon can you get started?"
            placeholder=""
            height="150px"
          />

          {/* How did you hear about us? */}
          <SelectField label="How did you hear about Detoplea Marketing?" options={hearAboutUsOptions} />

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
