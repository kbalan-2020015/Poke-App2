import React from "react";

const Navbar = () => {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <nav>
            <img src={imgUrl} className="nav__img" alt="PokeAPI-logo"/>
        </nav>
    );
}

export default Navbar;