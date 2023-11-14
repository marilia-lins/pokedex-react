import { PokeContext } from "../PokeContext";
import { useContext } from "react";

export function useFavoriteContext(){
    const {favorite, setFavorite} = useContext(PokeContext)

    function newFavorite(fav) {
        const isFaveChosen = favorite.some(pokemon => pokemon.id === fav.id)

        let listOfFaves = [...favorite]

        if(!isFaveChosen){
            listOfFaves.push(fav)
            return setFavorite(listOfFaves)
        } else {
            listOfFaves.splice(listOfFaves.indexOf(fav), 1)
            return setFavorite(listOfFaves)
        }
    }

    return {
        favorite,
        newFavorite
    }
}