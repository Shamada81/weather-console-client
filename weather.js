#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess} from "./services/log.service.js"


const initCLI = () => {
	const args = getArgs(process.argv);
	// console.log(args);

	if (args.h) {
		printHelp();
	}
	if (args.s) {
		//Логика для города
	}
	if (args.t) {
		//Логика для работы с токенами 
	}
};

initCLI()