

const KEYS_LIST = {
	"-s": "s",
	"-h": "h",
	"-t": "t"
}

const entryCheck = item => Object.keys(KEYS_LIST).includes(item);

const getArgs = args => {
	const [ , ,...rest] = args;
	const res = {};

	rest.forEach((item, index, arr) => {
		if (entryCheck(item)) {
			if (!arr[index + 1] || entryCheck(arr[index + 1])) {
				res[KEYS_LIST[item]] = true;
			} else {
				res[KEYS_LIST[item]] = arr[index + 1]; 
			}
		}
	});

	return res;
}

export { getArgs };