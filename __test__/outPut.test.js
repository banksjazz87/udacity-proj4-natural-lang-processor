import { outPut } from "../src/client/js/post.request.js";

test("Testing the output function", () => {
    document.body.innerHTML = `
    <input id="input_box" type="text" placeholder="Insert valid URL here" onclick="return MyLibrary.inputListener()" />
    <input id="submit_button" type="button" value="Submit" onclick="return MyLibrary.apiCall()" />`

    const inputVal = document.getElementById('input_box');

    if (inputVal === "") {
        expect(outPut()).toBeUndefined();
    } else if ((/^https?:\/\/\S{4,}$/).test(inputVal)) {
        expect(outPut()).toBe('<li><li>')
    }
})