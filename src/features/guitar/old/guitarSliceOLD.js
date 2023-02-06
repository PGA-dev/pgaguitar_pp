import { GUITAR } from "../../app/shared/GUITAR";

//Used for GuitarDirectory
export const selectAllGuitar = () => {
    return GUITAR;
};

//Used for GuitarDirectory detail pages
export const selectGuitarById = (guitarid) => {
    return GUITAR.find((guitar) => guitar.id === parseInt(guitarid));
};

//Featured for FrontPage (Homepage)
export const selectFeaturedGuitar1 = () => {
    return GUITAR.find((guitar) => guitar.featured === 1);
};

export const selectFeaturedGuitar2 = () => {
    return GUITAR.find((guitar) => guitar.featured === 2);
};

export const selectFeaturedGuitar3 = () => {
    return GUITAR.find((guitar) => guitar.featured === 3);
};


