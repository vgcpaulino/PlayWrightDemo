
export async function waitElementHaveValue(element, timeout, retryAfter) {
    var elementValue = '';
    var timeoutAt = Date.now() + timeout;
    while (timeoutAt >= Date.now()) {
        elementValue = await element.evaluate(element => element.value);
        if (elementValue != '') {
            break;
        }
        await delay(retryAfter);
    }
    return (elementValue != '') ? true : false;
}


async function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

