import { MODELS} from "../../app/shared/MODELS";

export const selectAllModels = () => {
    return MODELS;
};

// export const selectRandomModels = ()=> {
//     return MODELS[Math.floor(MODELS.length * Math.random())];
// }

export const selectbyModelId = (modelid) => {
    return MODELS.find((model) => model.id === parseInt(modelid));
};

export const selectModelFeatured = () => {
    return  MODELS.find((model) => model.featured);
};