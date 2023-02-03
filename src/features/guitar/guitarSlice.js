import { GUITAR } from "../../app/shared/GUITAR";


export const selectAllGuitar = () => {
    return GUITAR;
};


export const selectGuitarById = (guitarid) => {
    return GUITAR.find((guitar) => guitar.id === parseInt(guitarid));
};

export const selectFeaturedGuitar1 = () => {
    return GUITAR.find((guitar) => guitar.featured === 1);
};

export const selectFeaturedGuitar2 = () => {
    return GUITAR.find((guitar) => guitar.featured === 2);
};

export const selectFeaturedGuitar3 = () => {
    return GUITAR.find((guitar) => guitar.featured === 3);
};


