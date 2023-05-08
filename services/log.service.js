import chalk from 'chalk';
import dedent from 'dedent-js';

const { bgCyan, bgRed, bgGreen, bgMagenta } = chalk;

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

const printWeather = (data, icon) => console.log(
	dedent`${bgMagenta(" WEATHER ")} Погода в городе ${data.name}
	${icon} ${data.weather[0].description}
	Температура: ${data.main.temp} (ощущается как ${data.main.feels_like})
	Влажность: ${data.main.humidity}%
	Скорость ветра: ${data.wind.speed}
	`
);

export { printError, printSuccess, printHelp, printWeather };