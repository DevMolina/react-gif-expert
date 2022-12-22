export const getGifs = async (category) => {
    const API = 'NpThEmSMkrv2pQrfbQG22CaRYunqLCHM'
    const URL = 'https://api.giphy.com/v1/gifs/search?api_key='
    const url = `${URL}${API}&q=${category}&limit=${5}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}