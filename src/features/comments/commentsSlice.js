import { GUITARSTAT } from '../../app/shared/GUITARSTAT';

export const selectStatByGuitarId = (guitarId) => {
    return GUITARSTAT.filter(
        (comment) => comment.guitarId === parseInt(guitarId)
    );
};