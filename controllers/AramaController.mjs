import {
    ara as AramaModelAra,
    eslestirmeEkle as AramaModelEslestirmeEkle,
    eslestirmeGetir as AramaModelEslestirmeGetir
} from "../models/Arama.mjs";



async function ara(term) {
    const res = await AramaModelAra(term);
    return res;
}

async function eslestirmeEkle(...rest) {
    const res = await AramaModelEslestirmeEkle(rest);
    return res;
}
async function eslestirmeGetir() {
    const res = await AramaModelEslestirmeGetir();
    return res;
}

export { ara, eslestirmeEkle, eslestirmeGetir };