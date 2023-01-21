import { GUITAR } from "../../app/shared/GUITAR";


export const selectAllGuitar = () => {
    return GUITAR;
};

// export const selectRandomCampsite = ()=> {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectGuitarById = (guitarid) => {
    return GUITAR.find((guitar) => guitar.id === parseInt(guitarid));
};

export const selectFeaturedGuitar = () => {
    return GUITAR.find((guitar) => guitar.featured);
};


