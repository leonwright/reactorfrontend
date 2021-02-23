const Avatar = ({ src, className }) => {
  return <img className={`rounded-full ${className}`} src={src} />;
};

export default Avatar;
