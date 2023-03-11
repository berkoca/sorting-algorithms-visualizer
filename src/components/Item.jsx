const Item = ({ left, width, height }) => {
  return (
    <div
      className="absolute bottom-0 bg-gradient-to-r from-gray-200 to-gray-700"
      style={{ left: `${left}%`, width: `${width}%`, height: `${height}%` }}
    ></div>
  );
};

export default Item;
