import chalk from 'chalk';
import dedent from 'dedent-js';

const { bgCyan, bgRed, bgGreen } = chalk;

const printError = error => console.log(bgRed(' Error ') + " " + error);

const printSuccess = message => console.log(bgGreen(' Success ') + " " + message);

const printHelp = () => console.log(
	dedent`${bgCyan(" Help ")}
	Без параметров погоды - вывод погоды
	-s [SITY] - для установки города
	-h - вывода помощи
	-t [API_KEY] - для сохранения токена
	`
	);

export { printError, printSuccess, printHelp };