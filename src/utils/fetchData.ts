export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "94abca3c7bmshcc1045b503eda05p133029jsncd3631d89c1c",
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '94abca3c7bmshcc1045b503eda05p133029jsncd3631d89c1c',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url: string, options: object) => {
    const response = await fetch(url, options)
    const data: never | any = await response.json()

    return data
}