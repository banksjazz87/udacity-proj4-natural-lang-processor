const apiCall = async() => {
    const response = await fetch('http://localhost:3090/callData');
    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error', error)
    }
}



export { apiCall }