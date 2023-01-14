import { PROMOTIONS } from '../../app/shared/MULTIGUITAR';

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};
