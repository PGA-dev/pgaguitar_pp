import { MULTIBASS } from "../../app/shared/MULTIBASS";

export const selectFeaturedMultiBass= () => {
    return MULTIBASS.find((multibass) => multibass.featured);
};
