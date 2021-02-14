jest.setTimeout(60000);

beforeAll(async () => {
    console.log('Jest Hook: Before All!');
    var x = expect.getState();
    var x1 = expect.getState().currentTestName;
});

beforeEach(async () => {
    console.log('Jest Hook: Before Each!');
    await jestPlaywright.resetBrowser();
    await jestPlaywright.resetContext();
    // await jestPlaywright.resetPage();
    var x = expect.getState();
    var x1 = expect.getState().currentTestName;
});

afterEach(async () => {
    console.log('Hook: After Each!');
});

afterAll(async () => {
    console.log('Hook: After All!');
});