import { useEffect } from "react";
import Item from "./Item";

const Items = ({ items, slider }) => {
  useEffect(() => {}, [items]);

  const calculateLeft = (item) =>
    item > 0 ? (item * 100) / parseInt(slider) : 0;
  const calculateWidth = () => 100 / parseInt(slider);
  const calculateHeight = (item) => ((item + 1) * 100) / parseInt(slider);

  return (
    <div className="p-6">
      <div className="relative w-full h-[500px] border-4 rounded border-gray-700">
        {items?.map((item) => (
          <Item
            key={item}
            left={calculateLeft(item)}
            width={calculateWidth(item)}
            height={calculateHeight(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
