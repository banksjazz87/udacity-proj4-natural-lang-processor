import { outPut } from "../src/client/js/post.request.js";

test("Testing the output function, to make sure that a list item is returned if true and an alert is returned if false", () => {
    document.body.innerHTML = `
    <input id="input_box" type="text" placeholder="Insert valid URL here" onclick="return MyLibrary.inputListener()" />
    <input id="submit_button" type="button" value="Submit" onclick="return MyLibrary.apiCall()" />`

    const inputVal = document.getElementById('input_box');

    const positiveInput = "<li></li>";

    const errorMessage = alert('Please insert a correct URL address, and make sure the URL starts with "http://" or "https://"');

    if ((/^https?:\/\/\S{4,}$/).test(inputVal)) {
        expect(outPut()).toBe(positiveInput)
    } else {
        expect(outPut()).toBe(errorMessage);
    }
})