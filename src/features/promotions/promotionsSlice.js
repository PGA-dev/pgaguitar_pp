import { MULTIGUITAR } from '../../app/shared/MULTIGUITAR';

export const selectFeaturedMulti= () => {
    return MULTIGUITAR.find((multiguitar) => multiguitar.featured);
};
