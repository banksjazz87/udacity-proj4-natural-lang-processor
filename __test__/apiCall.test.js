import { apiCall } from "../src/client/js/api.request.js";
import { enableFetchMocks } from 'jest-fetch-mock';
import { outPut } from "../src/client/js/post.request.js";
enableFetchMocks();


test("Testing the functionality of the apiCall function", () => {

    const MyLibrary = {
        outPut: outPut()
    };

    expect(apiCall()).toBeDefined();
})