import SettingsButton from "./SettingsButton";

const Settings = ({ algorithm, slider, setSlider }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-6">
      <div>
        <header className="text-5xl text-center md:text-start pb-3 md:pb-0">Sorting Algorithms Visualizer</header>
        <span>{algorithm || "None Selected"}</span>
      </div>
      <div className="w-full">
        <div className="flex justify-center md:justify-end items-center">
          <SettingsButton icon="material-symbols:shuffle" />
          <SettingsButton icon="material-symbols:play-arrow" />
          <div>
            <label
              htmlFor="minmax-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
            >
              Items: {slider}
            </label>
            <input
              id="minmax-range"
              type="range"
              min="10"
              max="1000"
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
