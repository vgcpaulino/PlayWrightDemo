import { test, expect, request } from '@playwright/test';

let apiRequest, result, resultBody;

test.describe('Tests Playwright v 1.16', () => {
    test('', async ({ page }) => {
        await page.goto('https://www.example.com');
        const title = await page.title();
        console.log(title);

        apiRequest = await request.newContext();
        result = await apiRequest.post('https://restful-booker.herokuapp.com/auth');
        
        expect(result.status()).toBe(200);
        resultBody = await result.json();
        expect(resultBody).toMatchObject({
            reason: 'Bad credentials'
        });

        result = await apiRequest.post('https://restful-booker.herokuapp.com/auth', {
            data: {
                username: 'admin',
                password: 'password123'
            },
        });
        expect(result.status()).toBe(200);
        resultBody = await result.json();
        expect(resultBody).toHaveProperty('token');

        const token = resultBody.token;
        result = apiRequest.get('https://restful-booker.herokuapp.com/booking');
    });
});
