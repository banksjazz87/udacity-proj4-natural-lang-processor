const postRequest = async(url, key) => {
    const formdata = new FormData();
    formdata.append("key", key);
    formdata.append("url", document.getElementById('input_box').value);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }

    const mainResponse = await fetch(url, requestOptions);

    try {
        const newData = {
            status: mainResponse.status,
            body: await mainResponse.json()
        }
        displayedData = {
            Agreement: newData.body.agreement,
            Confidence: newData.body.confidence,
            Irony: newData.body.irony,
            Subjectivity: newData.body.irony,
            Score: newData.body.
            score_tag
        }
        console.log(displayedData)
            //console.log(newData.status, newData.body)
    } catch (error) {
        console.log('error', error)
    }
}

let displayedData = {
    Agreement: "",
    Confidence: "",
    Irony: "",
    Subjectivity: "",
    Score: ""
}
export { postRequest }