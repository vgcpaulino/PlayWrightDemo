
// can be async or not
export async function mochaGlobalSetup() {
    console.log(`Mocha Global Setup!`);
}

// can be async or not
export async function mochaGlobalTeardown() {
    console.log('Mocha Global Teardown!');
}

