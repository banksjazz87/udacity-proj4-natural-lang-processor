/**
 * @description this is the function that is called when the user clicks the 'click here' button.
 * @returns a series of different promises that ulitmately, if successful, renders new information to the UI.
 */

const apiCall = () => {
    fetch('http://localhost:3090/callData')
        .then(response => response.json())
        .then(data => MyLibrary.postRequest(data.application_id, data.application_key))
        .then(() => MyLibrary.outPut())
        .catch(error => console.log('error', error))
}




export { apiCall }