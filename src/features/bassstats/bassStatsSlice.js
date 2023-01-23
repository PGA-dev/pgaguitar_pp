import { BASSSTAT } from '../../app/shared/BASSSTAT';

export const selectStatByBassId = (bassid) => {
    return BASSSTAT.filter(
        (bassstat) => bassstat.bassid === parseInt(bassid)
    );
};