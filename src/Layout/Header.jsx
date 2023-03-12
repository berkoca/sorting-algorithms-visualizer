const Header = ({ title }) => {
  return (
    <header className="text-5xl">{title || "No Select"}</header>
  );
};

export default Header;
