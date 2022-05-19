/* 
- Context is an object here
- This object will contain a react component
- when we build our own react component, the convention which we should follow start with a capital letter
- 1st argument is initial value of the context
*/
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites( (prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites( (prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => {
                return meetup.id !== meetupId;
            });
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => {
            return meetup.id === meetupId;
        });
        /* 
        userFavorites.length > 0 ? true : false;
        */
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    return <FavoritesContext.Provider value={ context }>
        { props.children }
    </FavoritesContext.Provider>
}

export default FavoritesContext;
