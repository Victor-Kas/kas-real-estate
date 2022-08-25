import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

/* headers: {
    'X-RapidAPI-Key': 'f193c6a8afmshc5582244f3384c6p10180fjsn959346a9f7ae',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
} */

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f193c6a8afmshc5582244f3384c6p10180fjsn959346a9f7ae',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }, 
    });

    return data;
}