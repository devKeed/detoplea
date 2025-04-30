import { MyFillButton } from "./Button";
import MyInput from "./Input";

export const NewsLetterForm = () => {
  return (
    <div className="w-full space-y-4 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-black text-center">
        JOIN OUR NEWSLETTER
      </h2>
      <p className=" text-gray-700 text-center">
        Receive insider news and valuable social media tips from our team, so
        you never miss a beat!
      </p>
      <MyInput type="text" placeholder="First Name" />
      <MyInput type="email" placeholder="Email Address" />
      <div className="flex m-auto text-center">
        <MyFillButton text="Subscribe" link="#" arrow={false} />
      </div>
    </div>
  );
};
