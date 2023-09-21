import Link from "next/link";
import React from "react";

const CocktailCard = () => {
    return (
        <Link href="/">
            <div>
                <img src="https://picsum.photos/200/300" alt="" />
                <h3>Name of cocktail but make dynamic</h3>
            </div>
        </Link>
    )
}

export default CocktailCard