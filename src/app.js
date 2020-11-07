import {ThemesLoader} from './themes-loader';
import {ThemesRenderer} from './themes-renderer';
import {LoaderRenderer} from './loader-renderer';

export class App {
    constructor() {
        this.themesLoader = new ThemesLoader();
        this.themesRenderer = new ThemesRenderer();
        this.loaderRenderer = new LoaderRenderer();

        this.url = 'https://gitcdn.link/repo/netology-code/ajs-task/master/netology.json';
    }

    async run() {
        const container = document.getElementById('root');

        this.loaderRenderer.showLoader();

        try {
            const themes = await this.themesLoader.load(this.url);

            this.themesRenderer.render(container, themes);
        } catch (exception) {
            this.themesRenderer.renderError(container, exception);
        } finally {
            this.loaderRenderer.hideLoader();
        }
    }
}
