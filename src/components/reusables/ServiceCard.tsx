import { BsArrowDownLeftCircle } from "react-icons/bs";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  breakdown: string;
}

export const ServiceCard = ({
  title,
  description,
  image,
  features,
  breakdown,
}: ServiceCardProps) => {
  return (
    <div className="bg-[#F2F2F2] rounded-2xl p-6 flex flex-col md:flex-row gap-6 max-w-6xl mx-auto relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 h-full object-cover rounded-xl"
      />
      <div className="flex-1 gap-8">
        <h2 className="text-4xl font-medium uppercase text-gray-800 mt-24">
          {title}
        </h2>
        <p className="text-md text-gray-600 mt-2">{description}</p>
        <div className="mt-3">
          <h3 className=" text-2xl font-medium text-gray-800 mt-7">
            WHAT WE MANAGE:
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-2xl h-10 p-4 pt-2 border border-black"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className=" text-xl font-medium text-gray-800 mt-7">
            LET'S BREAK IT DOWN:
          </h3>
          <p className="text-sm text-gray-700 mt-1">{breakdown}</p>
        </div>
      </div>
      <BsArrowDownLeftCircle className="absolute top-8 right-8 text-black size-16 " />
    </div>
  );
};
