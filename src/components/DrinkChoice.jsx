export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h2>Your choice is {drink.name}.</h2>
      <img src={drink.imgUrl} height={100} width={100} alt={drink.alt}></img>
      <p>Your drink will be ready in just a moment</p>
    </>
  );
};
