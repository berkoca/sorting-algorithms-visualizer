const OptionButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded p-4">{title}</button>
  );
};

export default OptionButton;
