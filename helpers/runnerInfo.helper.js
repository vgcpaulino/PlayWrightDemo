
export function runningInsideDocker() {
    const fs = require('fs');
    try { 
        return fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
    } catch (_) {
		return false;
	}
}