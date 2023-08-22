const baseURL = process.env.REACT_APP_BASEURL

const episodes ='/episode'

const urls = {
    episodes:{
        base: episodes,
        byId:(id) =>`${episodes}/${id}`
    }
}

export {
    baseURL,
    urls
}