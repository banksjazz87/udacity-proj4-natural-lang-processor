async function apiCall(apiData) {
    const response = await fetch(apiData);
    try {
        console.log(response);
    } catch (error) {
        console.log('error', error)
    }
}



export { apiCall }