import React from "react";

const PokeInfo = ({ data }) => {
    // console.log(data);
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <div className="card__showText" id="show1">
                            <a href="/" className="show__close">X</a>

                            <div className="show__container">
                                <h2 className="names">{data.name}</h2>

                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="pokemon__img" className="img" />

                                <div className="abilities">
                                    {
                                        data.abilities.map(poke => {
                                            return (
                                                <div className="group">
                                                    <h2>{poke.ability.name}</h2>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="content">
                                    {
                                        data.stats.map(poke => {
                                            return (
                                                <>
                                                    <h3> {poke.stat.name} : {poke.base_stat} </h3>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>

                    </>
                )
            }
        </>
    );
}

export default PokeInfo;