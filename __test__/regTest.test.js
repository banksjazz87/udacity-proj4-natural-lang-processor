import { regTest } from '../src/client/js/post.request.js';

test("Making sure that the input by the user is in fact a URL", () => {


    expect(regTest('https://www.cnn.com/')).toBe(true);



})