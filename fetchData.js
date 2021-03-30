function fetchData({url, errorText, successCallback, errorCallback}){
    const request = fetch(url);
    request
        .then(response => {
            if(!response.ok){
                throw new Error(errorText)
            }
            return response.json()
        })
        .then(successCallback)
        .catch(errorCallback);
    
    return request;
}

export default fetchData;