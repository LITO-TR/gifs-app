const apiKey = 'MV2Jc3Nugx6ItrcWZNtideRpxZLLVPTW'
export default function getGifs ({keyword = 'spiderman'}={}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
     return fetch(apiURL)
        .then(res => res.json())
        .then(respose => {
            const {data=[]}=respose
            if(Array.isArray(data)){
                const gifs = data.map(image => image.images.downsized_medium.url)
                return gifs
            }
        })
}
