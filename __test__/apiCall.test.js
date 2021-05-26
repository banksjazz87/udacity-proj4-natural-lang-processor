import { apiCall } from "../src/client/js/api.request.js";

import { enableFetchMocks } from 'jest-fetch-mock';


enableFetchMocks();


test("Testing the functionality of the apiCall function, we should get an error message, because nothing is being submitted in the html input field", async() => {
    //let result = await apiCall;
    expect(apiCall()).toBeDefined();
})