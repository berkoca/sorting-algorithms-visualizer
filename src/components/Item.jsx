import { useEffect, useState } from "react";

const Item = ({ index, item, slider, isActiveItem }) => {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const newLeft = item > 0 ? (item * 100) / parseInt(slider) : 0;
    const newWidth = 100 / parseInt(slider);
    const newHeight = ((index + 1) * 100) / parseInt(slider);

    setLeft(newLeft);
    setWidth(newWidth);
    setHeight(newHeight);
  }, [index, item, slider]);
  
  return (
    <div
      className={`absolute bottom-0 bg-gradient-to-br ${isActiveItem ? "from-red-500 to-red-900" : "from-gray-200 to-gray-700"}`}
      style={{
        left: `${left}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    ></div>
  );
};

export default Item;
