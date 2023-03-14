import SettingsButton from "./SettingsButton";

const Settings = ({ algorithm, slider, setSlider, randomizeItems, isSorting, sortItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-6">
      <div className="pb-3 md:pb-0">
        <header className="text-5xl text-center md:text-start">Sorting Algorithms Visualizer</header>
        <div className="text-center md:text-start">{algorithm || "None Selected"}</div>
      </div>
      <div className="w-full">
        <div className="flex justify-center md:justify-end items-center">
          <SettingsButton icon="material-symbols:shuffle" onClick={randomizeItems} />
          <SettingsButton icon="material-symbols:play-arrow" onClick={sortItems} />
          <div>
            <label
              htmlFor="minmax-range"
              className="block mb-2 text-sm font-medium text-white text-center"
            >
              Items: {slider}
            </label>
            <input
              id="minmax-range"
              type="range"
              min="10"
              max="1000"
              step="5"
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
