
function runningOnDocker() {
    return process.env.DOCKER_EXEC === 'true';
}

module.exports = {
    runningOnDocker,
}