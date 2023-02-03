import { BASS } from "../../app/shared/BASS";
import { GUITAR } from "../../app/shared/GUITAR";
import { MULTIGUITAR } from '../../app/shared/MULTIGUITAR';
import { MULTIBASS } from "../../app/shared/MULTIBASS";

//Filter for front end display cards on Products/Services featured
export const selectFeaturedMultiBass= () => {
    return MULTIBASS.find((multibass) => multibass.featured);
};

export const selectFeaturedMulti= () => {
    return MULTIGUITAR.find((multiguitar) => multiguitar.featured);
};

export const selectFeaturedBass= () => {
    return BASS.find((bass) => bass.featured);
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