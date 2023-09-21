import React from "react";
import CocktailCard from "../(shared)/components/CocktailCard";

const Home = () => {
  const cocktails = [
    {
      id: 1,
      name: "The Last Word",
      image: "/images/thelastword.jpg",
    },
    {
      id: 2,
      name: "Old Fashion",
      image: "/images/oldfashion.jpg",
    },
    {
      id: 3,
      name: "Negroni",
      image: "/images/negroni.jpg",
    },
    {
      id: 4,
      name: "Margarita",
      image: "/images/margarita.jpg",
    },
    {
      id: 5,
      name: "Gimlet",
      image: "/images/gimlet.jpg",
    },
  ];

  return (
    <div>
        <h1>Try these 5 cocktails!</h1>
        <div>
            {cocktails.map((cocktail) => (
                <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))}
        </div>
    </div>
  )
};

export default Home