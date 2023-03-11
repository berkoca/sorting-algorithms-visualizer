import algorithms from "../helpers/algorithms";
import OptionButton from "./OptionButton";

const Options = ({ setAlgorithm }) => {
  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2">
      {algorithms?.map(algorithm => <OptionButton title={algorithm} onClick={() => setAlgorithm(algorithm)} />)}
    </div>
  );
};

export default Options;
