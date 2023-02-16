import "./DrinkItem.css";

export const DrinkItem = ({ drink }) => {
  return (
    <div className="drink">
      <img src={drink.imgUrl} width={50} height={50} alt={drink.alt}></img>
      <p>{drink.name}</p>
    </div>
  );
};
