const OuterAppLayout = ({ children }) => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-center items-center">
      {children}
    </div>
  );
};

export default OuterAppLayout;
