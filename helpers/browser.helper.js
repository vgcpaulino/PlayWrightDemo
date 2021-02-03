

async function getChrome() {
    return await chromium.launch({headless: false});
}

export { getChrome }