import { GUITAR } from "../../app/shared/GUITAR";


export const selectAllGuitar = () => {
    return GUITAR;
};


export const selectGuitarById = (guitarid) => {
    return GUITAR.find((guitar) => guitar.id === parseInt(guitarid));
};

export const selectFeaturedGuitar = () => {
    return GUITAR.find((guitar) => guitar.featured);
};


