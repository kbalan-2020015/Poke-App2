import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import Navbar from "./Navbar";
import Search from "./Search";
import axios from "axios";

export const searchPokemon = async(pokemon) => {
    try{
        let urlSearch = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(urlSearch);
        const data = await response.json();
        return data;
    }
    catch(err){
        return err;
    }
}

const Main = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState({});
    const [prevUrl, setPrevUrl] = useState({});
    const [pokeDex, setPokeDex] = useState({});

    const getData = async () => {
        try{
            setLoading(true);
            const res = await axios.get(url);
            setNextUrl(res.data.next);
            setPrevUrl(res.data.previous);
            getPokemon(res.data.results);
            setLoading(false);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [url]);

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
            <section className="nav">
                <Navbar/>
            </section>

            <section className="container">
                <h1 className='title'>Welcome to the PokeAPI</h1>

                <Search/>

                <div className="card__buttons">
                    {
                        prevUrl && <button onClick={() => {
                            setUrl(prevUrl);
                        }}>Previous</button>
                    }

                    {
                        nextUrl && <button onClick={() => {
                            setUrl(nextUrl);
                        }}>Next</button>
                    }
                </div>

                <div className="card__info">
                    <Card pokemon={pokemonData} loading={loading} infoPokemon={poke => setPokeDex(poke)}/>
                </div>

                <div className="card__buttons">
                    {
                        prevUrl && <button onClick={() => {
                            setUrl(prevUrl);
                        }}>Previous</button>
                    }

                    {
                        nextUrl && <button onClick={() => {
                            setUrl(nextUrl);
                        }}>Next</button>
                    }
                </div>
            </section>
            
            {
                pokeDex && pokeDex.abilities &&
                <PokeInfo data={pokeDex}/>
            }
        </>
    );
}

export default Main;