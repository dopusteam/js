import Loader from './loader.svg';

export class LoaderRenderer {
    constructor() {
        this.loaderId = 'custom-loader';
    }

    showLoader() {
        this._removeLoaderIfExists();

        const loader = document.createElement('div');

        loader.id = this.loaderId;

        loader.style.display = 'block';
        loader.style.position = 'fixed';
        loader.style.width = '100%';
        loader.style.height = '100%';
        loader.style.zIndex = '100';
        loader.style.top = '0';
        loader.style.left = '0';
        loader.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';

        const image = new Image();

        image.style.width = '50px';
        image.style.height = '13px';
        image.style.position = 'absolute';
        image.style.top = '50%';
        image.style.left = '50%';
        image.style.marginTop = '-6px';
        image.style.marginLeft = '-24px';

        image.src = Loader;

        loader.append(image);

        document.body.append(loader);
    }

    hideLoader() {
        this._removeLoaderIfExists();
    }

    _removeLoaderIfExists() {
        const loader = document.getElementById(this.loaderId);

        if (loader) {
            document.body.removeChild(loader);
        }
    }
}
