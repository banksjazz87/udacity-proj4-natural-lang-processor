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
            Subjectivity: newData.body.subjectivity,
            Score: newData.body.
            score_tag
        }
        console.log(displayedData)
            //console.log(newData.status, newData.body)
    } catch (error) {
        console.log('error', error)
    }
}

//Object that will contain the values that we want to have displayed after the fetch requests have been made.
let displayedData = {
    Agreement: "",
    Confidence: "",
    Irony: "",
    Subjectivity: "",
    Score: ""
}

const outPut = () => {
    let displayedLength = (Object.keys(displayedData).length);

    //let header = document.createElement('ul');
    //let liItem = document.createElement('li');

    for (let i = 0; i < displayedLength; i++) {

        let header = document.createElement('ul');
        header.textContent = Object.keys(displayedData)[i];

        let newAtt = document.createAttribute('id');
        newAtt.value = Object.keys(displayedData)[i];
        header.setAttributeNode(newAtt);

        let liItem = document.createElement('li');
        liItem.textContent = Object.values(displayedData)[i];
        document.getElementById(header)[i].appendChild(liItem)[i];

        document.getElementById('output_container').appendChild(header)[i];
    }
}
export { postRequest, outPut }