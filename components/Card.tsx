export const Card = ({ children }) => {
  return (
    <div className="bg-white w-1/3 rounded-lg shadow-lg py-8 px-6">
      {children}
    </div>
  );
};

export const CardTitle = ({ children, textSize, align }) => {
  return (
    <h1 className={`text-${align} text-${textSize} font-bold mb-5`}>
      {children}
    </h1>
  );
};

export const CardBody = ({ children }) => {
  return <div className="flex flex-col items-center">{children}</div>;
};
