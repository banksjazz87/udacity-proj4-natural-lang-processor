import { postRequest } from "../src/client/js/post.request.js";
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks();

test("Testing to make sure that the postRequest function is defined", () => {
    expect(postRequest()).toBeDefined();
})