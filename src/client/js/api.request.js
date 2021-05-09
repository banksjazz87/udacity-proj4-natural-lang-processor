const apiCall = () => {
    fetch('http://localhost:3090/callData')
        .then(response => response.json())
        .then(data => MyLibrary.postRequest(data.application_id, data.application_key))
        .then(MyLibrary.outPut)
        .catch(error => console.log('error', error))
}

export { apiCall }