import { postRequest } from "../src/client/js/post.request.js";
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks();

test("Testing the postRequest() function", () => {
    expect(postRequest()).toBeDefined();
})