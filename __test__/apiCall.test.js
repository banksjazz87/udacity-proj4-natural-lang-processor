import { apiCall } from "../src/client/js/api.request.js";

import { enableFetchMocks } from 'jest-fetch-mock';


enableFetchMocks();


test("Testing the functionality of the apiCall function", async() => {
    //let result = await apiCall;
    expect(apiCall).toBeDefined();
})