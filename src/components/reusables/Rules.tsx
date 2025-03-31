const Rules = ({ rules }: { rules: RuleItem[] }) => {
  return (
    <div className="text-center py-8 flex flex-col items-center">
      <h2 className="text-center font-bold mb-6">
        AFRICAN WARRIORS <br /> DAMBE RULES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {rules.map((rule, index) => (
          <div
            key={index}
            style={{ background: "#EDEDED", borderRadius: "20px",  }}
            className="rules-card hover:font-extrabold p-6 h-80 flex flex-col justify-between py-20 items-center w-72"
          >
            <p className="text-[40px] font-bold mb-8">{rule.number}</p>
            <p className=" text-xl font-semibold text-center">{rule.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;

interface RuleItem {
  number: number;
  text: string;
}
