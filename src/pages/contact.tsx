
export const Contact = () => {
  return (
    <div className="py-10 sm:py-16 lg:py-20">
      <div className="my-10 sm:my-20 lg:my-44">
        <h3 className="uppercase text-[#EE8029] text-center font-medium ">
          Client Application Form
        </h3>
        <p className="text-center font-normal mt-5 mb-10 px-3 text-sm sm:px-12 lg:px-60">
          Ready to elevate your brand and accelerate your growth? Start by
          filling out our application. Once we review your details, we'll
          schedule a complimentary call to discuss your goals, share strategic
          insights, and see if we're the right fit. Because we tailor our
          approach to deliver maximum impact, we selectively partner with
          businesses ready to scale.
        </p>
        <div className="pt-10 px-6 sm:px-12 lg:px-16 flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row w-full gap-7 pt-5">
              <div className="flex flex-col w-full sm:w-1/2">
                <h5>First Name</h5>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-3 w-full"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <h5>Last Name</h5>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-3 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-7 pt-5">
              <div className="flex flex-col w-full sm:w-1/2">
                <h5>Email</h5>
                <input
                  type="text"
                  placeholder="Email"
                  className="border p-3 w-full"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <h5>Phone Number</h5>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border p-3 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-7 pt-5">
              <div className="flex flex-col w-full sm:w-1/2">
                <h5>Company Name</h5>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border p-3 w-full"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <h5>Website/Social Media</h5>
                <input
                  type="text"
                  placeholder="Website/Social Media"
                  className="border p-3 w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-10 sm:pt-16">
            <p className="text-xl">What service(s) are you interested in?</p>
            <div className="flex flex-row gap-5 pt-5">
              <input
                type="checkbox"
                name="Brand Development"
                id="Brand Development"
                style={{ width: "30px", height: "30px" }}
              />
              <label htmlFor="Brand Development">Brand Development</label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                style={{ width: "30px", height: "30px" }}
                type="checkbox"
                name="Paid Ads"
                id="Paid Ads"
              />
              <label htmlFor="Paid Ads">Paid Ads</label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                style={{ width: "30px", height: "30px" }}
                type="checkbox"
                name="Social Media Management"
                id="Social Media Management"
              />
              <label htmlFor="Social Media Management">
                Social Media Management
              </label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                style={{ width: "30px", height: "30px" }}
                type="checkbox"
                name="E-mail Marketing"
                id="E-mail Marketing"
              />
              <label htmlFor="E-mail Marketing">E-mail Marketing</label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                style={{ width: "30px", height: "30px" }}
                type="checkbox"
                name="Web design and development"
                id="Web design and development"
              />
              <label htmlFor="Web design and development">
                Web design and development
              </label>
            </div>
          </div>

          <div className="flex flex-col my-10">
            <p className="text-xl">Please tell us more about your goals:</p>
            <textarea
              placeholder="Please be specific about what you're looking for, what you've previously tried, and if you have particular goals in mind."
              className="border p-4 w-full"
              style={{ height: "250px" }}
            ></textarea>
          </div>
          <div className="flex flex-col pt-8">
            <p className="text-xl">What is your monthly budget?</p>
            <div className="flex flex-row gap-5 pt-5">
              <input
                type="checkbox"
                name="Price1"
                id="Price1"
                style={{ width: "30px", height: "30px" }}
              />
              <label htmlFor="Price1">$1000 - $2000</label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                type="checkbox"
                name="Price2"
                id="Price2"
                style={{ width: "30px", height: "30px" }}
              />
              <label htmlFor="Price2">$2000 - $4000</label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                type="checkbox"
                name="Price3"
                id="Price3"
                style={{ width: "30px", height: "30px" }}
              />
              <label htmlFor="Price3">$4000 - $6000</label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                type="checkbox"
                name="Price4"
                id="Price4"
                style={{ width: "30px", height: "30px" }}
              />
              <label htmlFor="Price4">$6000 - $10000</label>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <input
                type="checkbox"
                name="Price5"
                id="Price5"
                style={{ width: "30px", height: "30px" }}
              />
              <label htmlFor="Price5">$10000 - $12000</label>
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <p className="text-xl">
              If this is a good fit, how soon can you get started?
            </p>
            <textarea
              className="border p-4 w-full"
              style={{ height: "150px" }}
            ></textarea>
          </div>

          <div>
            <p className="text-xl mt-10">
              How did you hear about Detoplea Marketing?
            </p>
            <select className="border p-3 w-full">
              <option>Select an option </option>
              <option value="google">Google</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
            </select>
          </div>
        </div>
        <div className="py-10 px-6 sm:px-12 lg:px-16 flex justify-end">
          <button className="bg-[#F2720D] text-white flex items-center gap-2 px-10 py-3 rounded-2xl hover:bg-gray-500 hover:text-white transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
