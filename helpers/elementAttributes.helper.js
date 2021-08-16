
async function getElementAttribute(page, element, attributeName) {
    const result = await page.evaluate(([element, attributeName]) => { return Promise.resolve(element[attributeName]); }, [element, attributeName]);
    return result;
}

async function getElementValue(element) {
    return await element.evaluate(e => e.value);
}

module.exports = {
    getElementAttribute,
    getElementValue
}