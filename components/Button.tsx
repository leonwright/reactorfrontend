import { GithubIcon } from "./svgs";

export const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className={
        "bg-red-500 hover:bg-red-700 text-white p-3 rounded-xl text-sm " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const IconButton = ({ children, className, icon, type }) => {
  return (
    <button
      type={type}
      className={
        "bg-black text-white p-3 w-full flex justify-center rounded-xl " +
        className
      }
    >
      <div className="mr-3">{icon}</div>
      {children}
    </button>
  );
};
