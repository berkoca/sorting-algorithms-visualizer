import { useEffect, useState } from "react";
import Items from "./components/Items";
import Options from "./Components/Options";
import Settings from "./components/Settings";

const App = () => {
  const [algorithm, setAlgorithm] = useState(null);
  const [slider, setSlider] = useState("100");
  const [items, setItems] = useState([]);

  const fillItems = (length) => {
    const newItems = [...Array(parseInt(length)).keys()];
    setItems(newItems);
  }

  useEffect(() => {
    fillItems(100);
  }, []);

  useEffect(() => {
    fillItems(slider);
  }, [slider]);
  
  return (
    <>
      <Settings algorithm={algorithm} slider={slider} setSlider={setSlider} />
      <Items items={items} slider={slider} />
      <Options setAlgorithm={setAlgorithm} />
    </>
  );
}

export default App;
