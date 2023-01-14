import { GUITARSTAT } from '../../app/shared/GUITARSTAT';

export const selectCommentsByGuitarId = (guitarId) => {
    return GUITARSTAT.filter(
        (comment) => comment.guitarId === parseInt(guitarId)
    );
};