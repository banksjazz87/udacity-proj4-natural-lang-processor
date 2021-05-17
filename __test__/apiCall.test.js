import { apiCall } from "../src/client/js/api.request.js";
import { MyLibrary } from "../dist/main.js";
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();
MyLibrary;

test("Testing the functionality of the apiCall function", () => {
    expect(apiCall()).toBeDefined();
})