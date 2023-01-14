import { MULTIGUITAR } from '../../app/shared/MULTIGUITAR';

export const selectFeaturedPromotion = () => {
    return MULTIGUITAR.find((multiguitar) => multiguitar.featured);
};
