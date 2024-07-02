import { createContext, useState  } from "react";
export const FavoritesContext = createContext({
    ids : [],
    addFavorite : (id) =>{},
    removeFavorite : (id) => {},
})


function FavoritesContextProvider({children}){

    const [favoriteFoofdIds, setFavoriteFoofdIds] =useState({})

    function addFavorite(id){
        setFavoriteFoofdIds((current) => [...current,id])
    }

    function removeFavorite(id){
        setFavoriteFoofdIds((current) => current.filter((foodId)=>
            foodId !== id
        ))
    }

    const value = {
        ids : favoriteFoofdIds,
        addFavorite : addFavorite,
        removeFavorite : removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;