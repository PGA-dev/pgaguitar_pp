import { baseUrl } from "../app/shared/baseUrl";
//from NuCampsite
export const mapImageURL = (rma) => {
    return rma.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};