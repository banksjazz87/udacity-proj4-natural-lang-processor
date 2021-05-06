const apiCall = () => {
    fetch('http://localhost:3090/callData')
        .then(response => response.json())
        .then(data => MyLibrary.postRequest(data.application_id, data.application_key))
        .catch(error => console.log('error', error))
}


/*const apiCall = async() => {
    const response = await fetch('http://localhost:3090/callData')
    try {
        const data = await response.json()

        .then(MyLibrary.postRequest(data.application_id, data.application_key))

        /*const formdata = new FormData();
        formdata.append("key", data.application_key);
        formdata.append("url", document.getElementById('input_box').value);
        formdata.append("lang", "en");

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        }

        const mainResponse = await fetch(data.application_id, requestOptions)


        /////// new attempt
        try {
            const newData = {
                status: mainResponse.status,
                body: await mainResponse.json()

            }

            console.log(newData.status, newData.body)
        } catch (error) {
            console.log('error', error)
        }
        /* .then(mainResponse => ({
                status: mainResponse.status,
                body: mainResponse.json()
            }))
            .then(({ status, body }) => console.log(status, body))

        .catch(error => console.log('error', error))

    } catch (error) {
        console.log('error', error)
    }
}*/



export { apiCall }