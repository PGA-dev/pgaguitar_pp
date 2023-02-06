import { GUITARSTAT } from '../../app/shared/GUITARSTAT';

export const selectStatByGuitarId = (guitarid) => {
    return GUITARSTAT.filter(
        (comment) => comment.guitarid === parseInt(guitarid)
    );
};