const apiCall = () => console.log(document.getElementById('input_box').value);


/*async() => {
    const response = await fetch('http://localhost:3090/callData');
    try {
        const data = await response.json();

        const formdata = new FormData();
        formdata.append("key", data.application_key);
        formdata.append("txt", document.getElementById('input_box').value);
        formdata.append("lang", "en");

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        }

        const mainResponse = await fetch(response.application_id, requestOptions)
            .then(mainResponse => ({
                status: mainResponse.status,
                body: mainResponse.json()
            }))
            .then(({ status, body }) => console.log(status, body))

    } catch (error) {
        console.log('error', error)
    }
}*/



export { apiCall }