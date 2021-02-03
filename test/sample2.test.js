import Browser from '../helpers/browserObj'

let browser = null;
describe('Using Constructor', () => {
    before(async () => {
        
    });

 
    beforeEach(async () => {
        browser = new Browser();
    });


    it('1',() => {
        browser.openPage('https://www.example.com/');
        var a = 1;
    });
    
    afterEach(async () => {
    });

    after(async () => {
    });


});






