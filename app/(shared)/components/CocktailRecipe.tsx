import React, { useEffect, useState} from "react";

const CocktailRecipe ({}) => {
    const [cocktail, setCocktail] = useState(null)

    useEffect(() => {

    },[])

    return (
        <div>
            <h2>Cocktail name dynamic</h2>
            <img src="https://picsum.photos/200/300" alt="name" />
            <p>cocktail instructions dynamic</p>
        </div>
    )
}

export default CocktailRecipe