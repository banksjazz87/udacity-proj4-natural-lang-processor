import { regTest } from '../src/client/js/post.request.js';

test("Making sure that the input by the user is in fact a URL", () => {
    expect(regTest()).toBeDefined();
    expect(regTest('https://www.cnn.com/')).toBe(true);
    expect(regTest('cat')).toBe(false);
})