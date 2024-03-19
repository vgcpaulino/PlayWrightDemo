
export function runningOnDocker() {
	return process.env.DOCKER_EXEC === 'true';
}
