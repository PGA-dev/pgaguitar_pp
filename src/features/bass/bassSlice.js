import { BASS } from "../../app/shared/BASS";

export const selectAllBass = () => {
    return BASS;
};

export const selectBassById = (bassid) => {
    return BASS.find((bass) => bass.id === parseInt(bassid));
};

export const selectFeaturedBass= () => {
    return BASS.find((bass) => bass.featured);
};