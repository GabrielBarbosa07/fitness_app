export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url: any, options: any) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}