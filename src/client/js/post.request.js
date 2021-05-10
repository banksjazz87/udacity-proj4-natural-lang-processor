/**
 * @description this is an async function that creates a post request, as instructed by the meaning cloud api, and then sets the value of the displayed data object and the httpCode variable. 
 * @param {*} url this is the input value that is provided by the user.
 * @param {*} key this is a hidden value.
 * @returns new values for the displayed data object, and also provides the value for the httpCode variable.
 */
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

        httpCode = newData.body.status.code;
        console.log(displayedData)
        console.log(newData.status, newData.body)
        console.log(newData.body.status.code)
    } catch (error) {
        console.log('error', error)
    }
}


//Object that will contain the values that will be displayed after the fetch requests have been made.
let displayedData = {
    Agreement: "",
    Confidence: "",
    Irony: "",
    Subjectivity: "",
    Score: ""
}

//variable to hold the current http status.
let httpCode = "";

//boolean to determine if the displayedData object has any current values.
let initValue = false;

//variable to hold the result of the regTest function.
let regTestResult = "";

/**
 * @description takes a string and runs a regEx test to determine if it's a URL.
 * @param {*} string 
 * @returns a boolean to determine if the passed parameter is a valid URL or not.
 */
const regTest = (string) => {
    regTestResult = ((/^https?:\/\/\S{4,}$/).test(string));
}


/**
 * @description This function is a string of conditional statements that looks at whether the user has; inserted an invalid URL, inserted a valid and initial URL request, or if the user has inserted a valied URL with data already being displayed on the page.
 * @returns an updated UI displaying the results of the URL that was submitted.
 */
const outPut = () => {
    //console.log(typeof(regTest(document.getElementById('input_box').value)));
    regTest(document.getElementById('input_box').value)
        //if (httpCode === "212") {
    if (regTestResult === false && httpCode === "212") {
        alert('Please insert a correct URL address');
    } else if (initValue === false) {
        let displayedLength = (Object.keys(displayedData).length);

        const listMaster = document.createElement('ul');
        listMaster.textContent = "Results"
        const att = document.createAttribute('id');
        att.value = "list";
        listMaster.setAttributeNode(att);

        document.getElementById('output_container').appendChild(listMaster);

        for (let i = 0; i < displayedLength; i++) {

            let liItem = document.createElement('li');
            liItem.textContent = Object.keys(displayedData)[i] + ':' + ' ' + Object.values(displayedData)[i];

            document.getElementById('list').appendChild(liItem)[i];

        }
        initValue = true;
        display();
    } else {
        const allLiItems = document.querySelectorAll('li');

        for (let i = 0; i < allLiItems.length; i++) {
            allLiItems[i].textContent = Object.keys(displayedData)[i] + ':' + ' ' + Object.values(displayedData)[i];
        }
    }
}

/**
 * @description this is an event listener applied to the input field.
 * @returns if there as data in the input field, the field will automatically delete everything if the user clicks on it again.
 */
const currentInput = document.getElementById('input_box');

currentInput.addEventListener('click', () => {
    if (currentInput.placeholder) {
        currentInput.placeholder = "";
    } else {
        currentInput.value = "";
    }
})

const display = () => {
    let currentDisplay = document.getElementById('output_container');

    if (currentDisplay.style.display === 'none') {
        currentDisplay.style.display = 'flex';
    }
}

export { postRequest, outPut }