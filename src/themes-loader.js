import {Theme} from "./theme";

/**
 * Класс для загрузки данных с сервера.
 * Отвечает за получение данных и преобразование их в нужный формат.
 */
export class ThemesLoader {
    async load(url) {
        const response = await fetch(url);

        const json = await response.json();

        return json.data.map(jsonObject => createTheme(jsonObject));

        function createTheme(jsonObject) {
            if (typeof jsonObject['direction'] === 'undefined') {
                throw Error('Неизвестная структура ответа сервере');
            }

            if (typeof jsonObject['direction']['title'] === 'undefined') {
                throw Error('Неизвестная структура ответа сервере');
            }

            if (typeof jsonObject['groups'] === 'undefined') {
                throw Error('Неизвестная структура ответа сервере');
            }

            const title = jsonObject['direction']['title'];
            const count = jsonObject['groups'].length;

            return new Theme(title, count);
        }
    }
}
