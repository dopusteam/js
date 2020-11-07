export class ThemesRenderer {
    render(container, themes) {
        const wrapper = document.createElement('div');
        wrapper.id = '#wrapper';
        wrapper.style.width = '1000px';
        wrapper.style.margin = '0 auto';
        wrapper.style.fontFamily = 'Arial, sans-serif';

        const header = this._createHeaderDomElement();
        wrapper.append(header);

        themes
            .map(theme => this._createDomElementForTheme(theme))
            .forEach((themeElement) => wrapper.append(themeElement));

        document.body.append(wrapper);
    }

    renderError(container, error) {
        container.innerText = error;
    }

    _createHeaderDomElement() {
        const headerElement = document.createElement('h1');
        headerElement.style.fontSize = '26px';
        headerElement.style.padding = '20px';
        headerElement.style.margin = '0';
        headerElement.style.borderBottom = '1px solid #cecece';

        const headerTextElement = document.createElement('span');
        headerTextElement.innerText = 'Изучайте ';

        headerElement.append(headerTextElement);

        const highlightedTextElement = document.createElement('span');
        highlightedTextElement.innerText = 'актуальные темы';

        highlightedTextElement.style.color = '#046dfa';

        headerElement.append(highlightedTextElement);

        return headerElement;
    }

    _createDomElementForTheme(theme) {
        const wrapperElement = document.createElement('div');

        wrapperElement.style.padding = '20px';
        wrapperElement.style.borderBottom = '1px solid #cecece';

        const titleElement = document.createElement('div');
        titleElement.style.fontWeight = 'bold';
        titleElement.style.fontSize = '24px';
        titleElement.style.margin = '5px 0';
        titleElement.style.overflow = 'hidden';
        titleElement.style.height = '30px';
        titleElement.style.textOverflow = 'ellipsis';
        titleElement.style.whiteSpace = 'nowrap';

        titleElement.innerText = theme.title;
        titleElement.title = theme.title;

        wrapperElement.append(titleElement);

        const countElement = document.createElement('div');
        countElement.style.fontSize = '16px';
        countElement.style.color = '#cecece';

        countElement.innerText = `Курсов: ${theme.coursesCount}`;

        wrapperElement.append(countElement);

        return wrapperElement;
    }
}
