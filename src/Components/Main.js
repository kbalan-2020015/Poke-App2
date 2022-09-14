import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import axios from "axios";

const Main = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const [pokeDex, setPokeDex] = useState([]);

    useEffect( () => {
        getData();
    }, [])
    
    const getData = async () => {
        try{
            setLoading(true);
            const res = await axios.get(url);
            getPokemon(res.data.results);
            setLoading(false);
        }
        catch(error){
            console.log(error);
        }
    }

    const getPokemon = async (res) => {
        res.map( async (item) => {
            const result = await axios.get(item.url);
            setPokemonData( state => {
                state = [...state, result.data];
                state.sort((a, b) => a.id > b.id ? 1 : -1);
                return state;
            });
        });
    }

    

    return (
        <>
            <section className="container">
                <h1 className='title'>Pokemons</h1>

                <div className="card__info">
                    <Card pokemon={pokemonData} loading={loading} infoPokemon={pokemon => setPokeDex(pokemon)}/>
                </div>
            </section>
            
            <PokeInfo data={pokeDex}/>
        </>
    );
}

export default Main;