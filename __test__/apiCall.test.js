import { apiCall } from "../src/client/js/api.request.js";
import { enableFetchMocks } from 'jest-fetch-mock';
import { postRequest } from "../src/client/js/post.request.js";
import { outPut } from "../src/client/js/post.request.js";

enableFetchMocks();


test("Testing the functionality of the apiCall function", async() => {
    let result = await apiCall;
    expect(result).toBeDefined();
})