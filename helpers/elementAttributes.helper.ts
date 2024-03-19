
export async function getElementAttribute(page, element, attributeName) {
	const result = await page.evaluate(([element, attributeName]) => { return Promise.resolve(element[attributeName]); }, [element, attributeName]);
	return result;
}

export async function getElementValue(element) {
	return await element.evaluate(e => e.value);
}
