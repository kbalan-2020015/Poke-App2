import React from "react";

const Card = ({pokemon, loading, infoPokemon}) => {
    return(
        <>
            {
                loading ? <h2>Loading...</h2> : pokemon.map((item) => {
                    return (
                        <>
                            <div className="card__item" key={item} onClick={() => infoPokemon(item)}> 
                                <h2 className="card__title">{item.id}</h2>

                                <img src={item.sprites.front_default} alt="Images" className="card__img"/>

                                <h2 className="card__name">{item.name}</h2>
                            </div>
                        </>
                    );
                })
            }
        </>
    );
}

export default Card;