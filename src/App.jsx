import { useEffect, useState } from "react";
import Items from "./Components/Items";
import Options from "./Components/Options";
import Settings from "./components/Settings";

const App = () => {
  const [algorithm, setAlgorithm] = useState(null);
  const [slider, setSlider] = useState("100");
  const [items, setItems] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const fillItems = (length) => {
    const newItems = [...Array(parseInt(length)).keys()];

    setItems(newItems);
  };

  const randomizeItems = () => {
    const randomizedItems = [...items];

    for (let i = randomizedItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = randomizedItems[i];
      randomizedItems[i] = randomizedItems[j];
      randomizedItems[j] = temp;
    }

    setItems(randomizedItems);
  };

  const selectionSort = async () => {
    if (items?.length) {
      setIsSorting(true);

      const array = [...items];
      const n = array.length;
      let i, j, min_index;

      for (i = 0; i < n - 1; i++) {
        min_index = i;

        for (j = i + 1; j < n; j++) {
          if (array[j] < array[min_index]) {
            min_index = j;
          }
        }

        const temp = array[min_index];
        array[min_index] = array[i];
        array[i] = temp;

        await new Promise((resolve) => setTimeout(resolve, 100));
        setItems([...array]);
      }

      setIsSorting(false);
      setActiveItem(null);
    }
  };

  const sortItems = () => {
    selectionSort();
  };

  useEffect(() => {
    fillItems(100);
  }, []);

  useEffect(() => {
    fillItems(slider);
  }, [slider]);

  return (
    <>
      <Settings
        algorithm={algorithm}
        slider={slider}
        setSlider={setSlider}
        randomizeItems={randomizeItems}
        isSorting={isSorting}
        sortItems={sortItems}
      />
      <Items items={items} slider={slider} />
      <Options items={items} setAlgorithm={setAlgorithm} setItems={setItems} />
    </>
  );
};

export default App;
