export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "e3a14cbfd6mshce25c720da589fap131c6fjsn61b36c2940c6",
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url: string, options: object) => {
    const response = await fetch(url, options)
    const data: never | any = await response.json()

    return data
}