import Item from "./Item";

const Items = ({ items, slider }) => {
  return (
    <div className="p-6">
      <div className="relative w-full h-[500px] border-4 rounded border-gray-700">
        {items?.map((item, index) => (
          <Item
            key={item}
            index={index}
            item={item}
            slider={slider}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
