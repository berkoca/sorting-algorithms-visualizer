import { Icon } from "@iconify/react";

const SettingsButton = ({ icon, onClick }) => {
  return (
    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-1 rounded mr-2" onClick={onClick}>
      <Icon icon={icon} height={40} />
    </button>
  );
};

export default SettingsButton;
