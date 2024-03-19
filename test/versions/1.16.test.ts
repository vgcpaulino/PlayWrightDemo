import {
	test,
	expect,
} from '@playwright/test';

test.describe('Tests Playwright v1.16', () => {

	test('API /POST', async ({
		request 
	}) => {
		let result = await request.post(
			'https://restful-booker.herokuapp.com/auth'
		);

		expect(result.status()).toBe(200);
		let resultBody = await result.json();
		expect(resultBody).toMatchObject({reason: 'Bad credentials',});

		result = await request.post(
			'https://restful-booker.herokuapp.com/auth',
			{
				data: {
					username: 'admin',
					password: 'password123',
				},
			}
		);
		expect(result.status()).toBe(200);
		resultBody = await result.json();
		expect(resultBody).toHaveProperty('token');
		expect(resultBody.token).not.toBeNull();
	});

	test('API /GET', async ({
		request 
	}) => {
		const result = await request.get('https://restful-booker.herokuapp.com/booking');

		expect(result.status()).toBe(200);
		
		const resultBody = await result.json();
		expect(Array.isArray(resultBody)).toBeTruthy();
		expect(resultBody[0]).toHaveProperty('bookingid');
		expect(typeof resultBody[0]['bookingid']).toBe('number');
	});

});
