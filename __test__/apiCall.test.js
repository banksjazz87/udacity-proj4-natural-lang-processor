import { apiCall } from "../src/client/js/api.request.js";
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();


test("Testing the functionality of the apiCall function", async() => {
    const value = await apiCall();
    expect(value).toBe(true);
})