import React, { useState } from "react";
import { searchPokemon } from "./Main";

const Search = () => {
    const [search, setSearch] = useState('');
    const [setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async() => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
        <div>
            <div>
                <input placeholder="Buscar pokemon..." onChange={onChange}/>
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    );
}

export default Search;