
export const mochaHooks = {

    async beforeAll() {
        console.log('Before All - Hook File!');
    },

    async beforeEach() {
        console.log('Before Each - Hook File!');
    },

    async afterEach() {
        console.log('After Each - Hook File!');
    },

    async afterAll() {
        console.log('After All - Hook File!');
    }
};