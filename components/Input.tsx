export const TextInput = ({ placeholder, type, innerClasses, className }) => {
  return (
    <div className={className}>
      <input
        className={"border rounded-xl w-full h-10 pl-4 " + innerClasses}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const AlternateTextInput = ({ placeholder, type, className }) => {
  return (
    <input
      className={`bg-gray-100 rounded-full w-full h-10 pl-4 ${className}`}
      placeholder={placeholder}
      type={type}
    />
  );
};
