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

    const listMaster = document.createElement('ul');
    listMaster.textContent = "Sentiment Analysis Results"
    const att = document.createAttribute('id');
    att.value = "list";
    listMaster.setAttributeNode(att);

    document.getElementById('output_container').appendChild(listMaster);


    //let header = document.createElement('ul');
    //let liItem = document.createElement('li');
    for (let i = 0; i < displayedLength; i++) {


        let liItem = document.createElement('li');
        liItem.textContent = Object.keys(displayedData)[i] + ':' + ' ' + Object.values(displayedData)[i];

        setTimeout(() => { document.getElementById('list').appendChild(liItem)[i] }, 2000);

    }
}

const clearInput = () => document.getElementById('input_box').value = "";

export { postRequest, outPut, clearInput }