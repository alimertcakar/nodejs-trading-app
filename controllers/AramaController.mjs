import {
    ara as AramaModelAra
} from "../models/Arama.mjs";



async function ara(term) {
    const res = await AramaModelAra(term);
    return res;
}

export { ara };