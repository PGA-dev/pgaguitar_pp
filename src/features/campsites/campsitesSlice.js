import { GUITAR } from "../../app/shared/GUITAR";


export const selectAllCampsites = () => {
    return GUITAR;
};

// export const selectRandomCampsite = ()=> {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectCampsiteById = (guitarid) => {
    return GUITAR.find((guitar) => guitar.id === parseInt(guitarid));
};

export const selectFeaturedCampsite = () => {
    return GUITAR.find((guitar) => guitar.featured);
};


