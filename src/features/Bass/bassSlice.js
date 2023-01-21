import { BASS} from "../../app/shared/BASS";

export const selectAllBass = () => {
    return BASS;
};

// export const selectRandomCampsite = ()=> {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectbyBassId = (bassid) => {
    return BASS.find((bass) => bass.id === parseInt(bassid));
};

export const selectBassFeatured = () => {
    return BASS.find((bass) => bass.featured);
};