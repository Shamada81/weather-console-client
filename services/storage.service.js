import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

const isExist = async () => {
	try {
		await promises.stat(filePath);
		return true;
	} catch {
		return false;
	}
}

const saveKeyValue = async (key, value) => {
	let data = {};

	if (await isExist()) {
		const fileData = await promises.readFile(filePath);
		data = JSON.parse(fileData);
		console.log(data);
	}
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async key => {
	if (await isExist()) {
		const fileData = await promises.readFile(filePath);
		const data = JSON.parse(fileData);
		return data[key];
	}
}

export { saveKeyValue, getKeyValue };