import { createContext, useState } from "react";

export const PokeContext = createContext()

export default function PokeProvider({children}){

    const [pokemonData, setPokemonData] = useState();
    const [pokemons, setPokemons] = useState([]);
    const [searchPokemons, setSearchPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [loading, setLoading] = useState(false)
    

    const value = {
        pokemonData, setPokemonData,
        pokemons, setPokemons,
        searchPokemons, setSearchPokemons,
        globalPokemons, setGlobalPokemons,
        favorite, setFavorite,
        loading, setLoading
    }

    return(
        <PokeContext.Provider value={value}>
            {children}
        </PokeContext.Provider>
    )

}